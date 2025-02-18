// @ts-check
import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  adapter: node({
    mode: "standalone",
  }),

  experimental: {
    svg: true,
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
