// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/vue3";

import FormTitle from "./FormTitle.vue";

const meta: Meta<typeof FormTitle> = {
  title: "forms/FormTitle",
  component: FormTitle,
};

export default meta;
type Story = StoryObj<typeof FormTitle>;

export const profile: Story = {
  args: {
    title: "Profile",
    description:
      "This information will be displayed publicly so be careful what you share.",
  },
};

export const personal: Story = {
  args: {
    title: "Personal Information",
    description: "Use a permanent address where you can receive mail.",
  },
};

export const notifications: Story = {
  args: {
    title: "Notifications",
    description:
      "We'll always let you know about important changes, but you pick what else you want to hear about.",
  },
};

export const onlyTitle: Story = {
  args: {
    title: "onlyTitle",
  },
};
