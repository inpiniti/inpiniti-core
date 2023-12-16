// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/vue3";

import LabelsLeft from "./LabelsLeft.vue";

const meta: Meta<typeof LabelsLeft> = {
  title: "forms/LabelsLeft",
  component: LabelsLeft,
};

export default meta;
type Story = StoryObj<typeof LabelsLeft>;

export const component: Story = {};
