// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/vue3";

import Tab from "./Tab.vue";

const meta: Meta<typeof Tab> = {
  title: "elements/Tab",
  component: Tab,
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
    size: {
      type: "select",
      options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tab>;

export const fish: Story = {
  args: {
    icon: "fish",
    label: "fish",
  },
};

export const anchorDark: Story = {
  args: {
    icon: "anchor",
    label: "anchorDark",
    dark: true,
    count: 5,
  },
};

export const waterViolet: Story = {
  args: {
    icon: "water",
    label: "waterViolet",
    color: "violet",
  },
};

export const shipDarkPink: Story = {
  args: {
    icon: "ship",
    label: "ship",
    color: "pink",
    dark: true,
  },
};

export const otter: Story = {
  args: {
    icon: "otter",
    label: "otter",
  },
};

export const shrimp: Story = {
  args: {
    icon: "shrimp",
    label: "shrimp",
  },
};

export const sailboat: Story = {
  args: {
    icon: "sailboat",
    label: "sailboat",
  },
};

export const personSwimming: Story = {
  args: {
    icon: "person-swimming",
    label: "person-swimming",
  },
};
