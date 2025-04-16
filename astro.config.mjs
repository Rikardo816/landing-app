import { defineConfig } from 'astro/config';

export default defineConfig({
    site: `https://Rikardo816.github.io/landing-app`,
    output: "static",
    outDir: "./docs",
    build: {
        assets: "astro",
    },
});