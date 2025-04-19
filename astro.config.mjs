// FILE: astro.config.mjs
// This is the main configuration file for your Astro project.
// It includes the Tailwind CSS integration.

import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind"; // Import the Tailwind integration

// https://astro.build/config
export default defineConfig({
  integrations: [
    // Enable Tailwind CSS integration
    tailwind()
  ]
});
