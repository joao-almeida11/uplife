import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entryPoints: ["src/*"],
  format: ["esm"],
  dts: true,
  external: ["react"],
  ...options,
}));
