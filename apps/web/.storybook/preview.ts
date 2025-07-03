import type { Preview } from "@storybook/react-vite";

import "../src/index.css";

const preview: Preview = {
  parameters: {
    a11y: {
      config: {}, // axe-core config
      disable: false, // set to true to skip entirely
      // When you need CI gating, use the '@storybook/test-runner'
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
