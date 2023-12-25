// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/vue3";

import Header from "./Header.vue";

const meta: Meta<typeof Header> = {
  title: "heading/Header",
  component: Header,
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
type Story = StoryObj<typeof Header>;

export const component: Story = {
  args: {
    label: "Header",
  },
};
