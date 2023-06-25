import { Backgrand } from "./Backgrand";

export default {
  title: "atoms/Backgrand",
  component: Backgrand,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

export const BackgrandDefault = {
  args: {
    children: "aaa",
  },
};
