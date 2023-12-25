// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/vue3";

import PageHeader from "./PageHeader.vue";

const meta: Meta<typeof PageHeader> = {
  title: "heading/PageHeader",
  component: PageHeader,
};

export default meta;
type Story = StoryObj<typeof PageHeader>;

export const component: Story = {};
