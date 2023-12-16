// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/vue3";

import Stacked from "./Stacked.vue";

const meta: Meta<typeof Stacked> = {
  title: "forms/Stacked",
  component: Stacked,
};

export default meta;
type Story = StoryObj<typeof Stacked>;

export const component: Story = {};
