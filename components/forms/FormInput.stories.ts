// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/vue3";

import FormInput from "./FormInput.vue";

const meta: Meta<typeof FormInput> = {
  title: "forms/FormInput",
  component: FormInput,
};

export default meta;
type Story = StoryObj<typeof FormInput>;

export const first: Story = {
  args: {
    label: "First name",
  },
};

export const last: Story = {
  args: {
    label: "Last name",
  },
};

export const email: Story = {
  args: {
    label: "Email address",
    type: "email",
  },
};

export const street: Story = {
  args: {
    label: "Street address",
  },
};

export const city: Story = {
  args: {
    label: "City",
  },
};

export const state: Story = {
  args: {
    label: "State / Province",
  },
};

export const zip: Story = {
  args: {
    label: "ZIP / Postal code",
  },
};
