// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/vue3";

import FormCehckBox from "./FormCehckBox.vue";

const meta: Meta<typeof FormCehckBox> = {
  title: "forms/FormCehckBox",
  component: FormCehckBox,
};

export default meta;
type Story = StoryObj<typeof FormCehckBox>;

export const component: Story = {
  args: {
    label: "Comments",
    description: "Get notified when someones posts a comment on a posting.",
  },
};
