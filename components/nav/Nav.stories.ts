// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/vue3";

import Nav from "./Nav.vue";

const meta: Meta<typeof Nav> = {
  title: "nav/Nav",
  component: Nav,
  argTypes: {
    color: {
      type: "select",
      options: [
        "slate",
        "gray",
        "zinc",
        "neutral",
        "stone",
        "red",
        "orange",
        "amber",
        "yellow",
        "lime",
        "green",
        "emerald",
        "teal",
        "cyan",
        "sky",
        "blue",
        "indigo",
        "violet",
        "purple",
        "fuchsia",
        "pink",
        "rose",
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Nav>;

export const component: Story = {
  args: {
    active: "ship",
  },
};
