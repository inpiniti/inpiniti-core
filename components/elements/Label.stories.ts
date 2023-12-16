// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/vue3";

import Label from "./Label.vue";

const meta: Meta<typeof Label> = {
  title: "elements/Label",
  component: Label,
};

export default meta;
type Story = StoryObj<typeof Label>;

export const full_time: Story = {
  args: {
    icon: "briefcase",
    text: "Full-time",
  },
};

export const part_time: Story = {
  args: {
    icon: "location-dot",
    text: "Remote",
  },
};

export const dollar: Story = {
  args: {
    icon: "sack-dollar",
    text: "$120k - $140k",
  },
};

export const calendar: Story = {
  args: {
    icon: "calendar-days",
    text: "Closing on January 9, 2020",
  },
};
