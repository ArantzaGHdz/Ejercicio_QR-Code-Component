// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  site: "https://ArantzaGHdz.github.io",
  base: "/Ejercicio_QR-Code-Component/",
  adapter: vercel(),
});