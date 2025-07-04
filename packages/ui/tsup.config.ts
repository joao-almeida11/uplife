import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entryPoints: ["src/*"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ["react"],
  ...options,
}));
