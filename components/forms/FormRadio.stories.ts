// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/vue3";

import FormRadio from "./FormRadio.vue";

const meta: Meta<typeof FormRadio> = {
  title: "forms/FormRadio",
  component: FormRadio,
};

export default meta;
type Story = StoryObj<typeof FormRadio>;

export const component: Story = {
  args: {
    labels: ["Everything", "Same as email", "No push notifications"],
  },
};
