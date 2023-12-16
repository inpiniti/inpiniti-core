// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/vue3";

import Button from "./Button.vue";

const meta: Meta<typeof Button> = {
  title: "elements/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const edit: Story = {
  args: {
    icon: "pen",
    text: "Edit",
  },
};

export const view: Story = {
  args: {
    icon: "link",
    text: "View",
  },
};

export const publish: Story = {
  args: {
    icon: "check",
    text: "Publish",
    active: true,
  },
};
