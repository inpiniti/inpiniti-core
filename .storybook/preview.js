/** @type { import('@storybook/vue3').Preview } */

import "../assets/css/main.css";
import "leaflet/dist/leaflet.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light", // 기본 배경색
      values: [
        { name: "light", value: "#eeeeee" }, // 밝은 배경색
        { name: "dark", value: "#111111" }, // 어두운 배경색
      ],
    },
  },
};

export default preview;
