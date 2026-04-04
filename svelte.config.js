import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [vitePreprocess({ script: true })],

    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: undefined,
        }),
        paths: {
            base: '/ajko',
            relative: false,
        },
        alias: {
            $lib: './src/lib',
            '$lib/*': './src/lib/*',
        },
    },
};

export default config;
