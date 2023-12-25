// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/vue3";

import SidebarLayout from "./SidebarLayout.vue";

const meta: Meta<typeof SidebarLayout> = {
  title: "shell/SidebarLayout",
  component: SidebarLayout,
};

export default meta;
type Story = StoryObj<typeof SidebarLayout>;

export const component: Story = {};
