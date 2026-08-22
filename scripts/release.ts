/**
 * One-command release: verify the build, bump the version, record the change in
 * CHANGELOG.md, then commit, tag, and push.
 *
 * Pushing to main is what triggers the deploy (see .github/workflows/release.yml),
 * so this exists to make the version and changelog a byproduct of shipping rather
 * than a separate chore that's easy to forget.
 *
 *     npx tsx scripts/release.ts patch "Fixed layout"
 *
 * Usually invoked through ./major, ./minor, ./patch or the matching npm scripts.
 */

import { execFileSync, spawnSync } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';

const LEVELS = ['major', 'minor', 'patch'] as const;
type Level = (typeof LEVELS)[number];

const CHANGELOG = 'CHANGELOG.md';
const BRANCH = 'main';

function fail(message: string): never {
    console.error(`\n✗ ${message}\n`);
    process.exit(1);
}

function step(message: string) {
    console.log(`\n▸ ${message}`);
}

/** Run a command quietly, returning its trimmed output. */
function capture(command: string, args: string[]): string {
    try {
        return execFileSync(command, args, { encoding: 'utf8' }).trim();
    } catch (error) {
        fail(
            `\`${command} ${args.join(' ')}\` failed:\n${error instanceof Error ? error.message : String(error)}`,
        );
    }
}

/** Run a command with its output visible, failing the release if it errors. */
function run(command: string, args: string[], whenFailed: string) {
    const { status, error } = spawnSync(command, args, { stdio: 'inherit' });
    if (error) fail(`Couldn't run \`${command}\`: ${error.message}`);
    if (status !== 0)
        fail(`\`${command} ${args.join(' ')}\` failed. ${whenFailed}`);
}

/** Today, local time, as YYYY-MM-DD. */
function today(): string {
    const now = new Date();
    return [
        now.getFullYear(),
        String(now.getMonth() + 1).padStart(2, '0'),
        String(now.getDate()).padStart(2, '0'),
    ].join('-');
}

function version(): string {
    const { version } = JSON.parse(readFileSync('package.json', 'utf8'));
    if (typeof version !== 'string')
        fail("package.json has no version field; can't release.");
    return version;
}

/** Insert an entry for this release above the most recent one. */
function updateChangelog(released: string, message: string) {
    if (!existsSync(CHANGELOG))
        fail(
            `There's no ${CHANGELOG} to update. Create one with a "# Changelog" heading.`,
        );

    const existing = readFileSync(CHANGELOG, 'utf8');
    const entry = `## ${released} — ${today()}\n\n- ${message}\n`;
    // Entries are newest first, so this one goes just above the previous one, or
    // after the header if this is the first.
    const previous = existing.indexOf('\n## ');
    writeFileSync(
        CHANGELOG,
        previous === -1
            ? `${existing.trimEnd()}\n\n${entry}`
            : `${existing.slice(0, previous + 1)}${entry}\n${existing.slice(previous + 1)}`,
    );
}

const [level, ...words] = process.argv.slice(2);
const message = words.join(' ').trim();

if (!LEVELS.includes(level as Level) || message.length === 0)
    fail(
        [
            'Usage: ./patch "What changed"   (also ./minor and ./major)',
            '   or: npm run patch "What changed"',
            '',
            'major = breaking or structural change, minor = new content or feature,',
            'patch = fix or small tweak.',
        ].join('\n'),
    );

// Everything below the build is a mutation, so check the repo is in a releasable
// state first.
const branch = capture('git', ['rev-parse', '--abbrev-ref', 'HEAD']);
if (branch !== BRANCH)
    fail(`Releases happen from ${BRANCH}, but you're on ${branch}.`);

if (capture('git', ['status', '--porcelain']).length === 0)
    fail("There's nothing to commit, so there's nothing to release.");

step('Catching up with origin');
run('git', ['pull', '--ff-only'], 'Reconcile with origin, then try again.');

step('Verifying the build');
run('npm', ['run', 'build'], 'Nothing was committed.');

step(`Bumping the ${level} version`);
run(
    'npm',
    ['version', level, '--no-git-tag-version'],
    'Nothing was committed.',
);

const released = version();
const tag = `v${released}`;

if (
    spawnSync('git', ['rev-parse', '-q', '--verify', `refs/tags/${tag}`], {
        stdio: 'ignore',
    }).status === 0
)
    fail(
        `Tag ${tag} already exists. The version bump is in your working tree; undo it with\n` +
            '  git checkout package.json package-lock.json',
    );

updateChangelog(released, message);

step(`Committing and pushing ${tag}`);
run('git', ['add', '-A'], 'Nothing was committed.');
run('git', ['commit', '-m', message], 'Nothing was committed.');
run(
    'git',
    ['tag', '-a', tag, '-m', message],
    `The commit landed but the tag didn't; tag it by hand with \`git tag -a ${tag} -m "${message}"\`.`,
);
run(
    'git',
    ['push', '--follow-tags'],
    'The commit and tag are local; push them by hand.',
);

console.log(`\n✓ Released ${tag}: ${message}`);
console.log('  Deploying via https://github.com/amyjko/faculty/actions\n');
