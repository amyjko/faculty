import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-static';
import type { UserConfig } from 'vite';

const config: UserConfig = {
    plugins: [
        sveltekit({
            preprocess: [vitePreprocess({ script: true })],
            adapter: adapter({
                pages: 'build',
                assets: 'build',
                fallback: undefined,
            }),
            paths: {
                base: '/ajko',
                relative: false,
            },
        }),
    ],
};

export default config;
