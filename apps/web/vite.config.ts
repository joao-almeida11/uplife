import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react-swc";
// https://vite.dev/config/
import path from "node:path";
import { fileURLToPath } from "node:url";
/// <reference types="vitest/config" />
import { defineConfig } from "vite";
const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [
    // Please make sure that '@tanstack/router-plugin' is passed before '@vitejs/plugin-react'
    tanstackRouter({
      autoCodeSplitting: true,
      target: "react",
    }),
    react(),
    tailwindcss(),
  ],
  test: {
    coverage: {
      enabled: true,
      provider: "v8",
      reporter: ["text", "json", "html"],
    },
  },
});
