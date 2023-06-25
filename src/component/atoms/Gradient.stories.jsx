import { Gradient } from "./Gradient";

export default {
  title: "atoms/Gradient",
  component: Gradient,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
};

export const GradientTemplate = {
  args: {
    children: "Gradient",
    className: "h-60 w-96 rounded-lg shadow-xl px-6 py-8 text-white",
  },
};
