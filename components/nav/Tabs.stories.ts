// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/vue3";

import Tabs from "./Tabs.vue";

const meta: Meta<typeof Tabs> = {
  title: "nav/Tabs",
  component: Tabs,
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
type Story = StoryObj<typeof Tabs>;

export const component: Story = {
  args: {
    menus: [
      {
        name: "수집",
        count: 15,
      },
      {
        name: "학습",
        count: 115,
      },
      {
        name: "분석",
        count: 152,
      },
    ],
  },
};
