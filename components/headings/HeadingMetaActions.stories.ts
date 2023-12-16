// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/vue3";

import HeadingMetaActions from "./HeadingMetaActions.vue";

const meta: Meta<typeof HeadingMetaActions> = {
  title: "heading/HeadingMetaActions",
  component: HeadingMetaActions,
};

export default meta;
type Story = StoryObj<typeof HeadingMetaActions>;

export const component: Story = {
  args: {
    title: "Back End Developer",
  },
};

export const dark: Story = {
  args: {
    title: "Back End Developer",
    dark: true,
  },
};
