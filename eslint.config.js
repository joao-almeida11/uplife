// eslint.config.js  (project root)
import appConfig from "./app/eslint.config.js";
import serverConfig from "./server/eslint.config.js";

// helper → prepend "app/" or "server/" in front of every files-glob
const scoped = (configArray, prefix) =>
  configArray.map((c) => ({
    ...c,
    files: (c.files ?? ["**/*"]).map((glob) => `${prefix}/${glob}`),
  }));

export default [...scoped(appConfig, "app"), ...scoped(serverConfig, "server")];
