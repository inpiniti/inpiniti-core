// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/vue3";

import FormTextarea from "./FormTextarea.vue";

const meta: Meta<typeof FormTextarea> = {
  title: "forms/FormTextarea",
  component: FormTextarea,
};

export default meta;
type Story = StoryObj<typeof FormTextarea>;

export const about: Story = {
  args: {
    title: "About",
    description: "Write a few sentences about yourself.",
  },
};
