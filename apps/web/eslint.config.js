import eslintAppConfig from "@repo/eslint-config/app";
import tseslint from "typescript-eslint";

export default tseslint.config({
  extends: [eslintAppConfig],
});
