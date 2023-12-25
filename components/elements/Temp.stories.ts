// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/vue3";

import Temp from "./Temp.vue";

const meta: Meta<typeof Temp> = {
  title: "elements/Temp",
  component: Temp,
};

export default meta;
type Story = StoryObj<typeof Temp>;

export const component: Story = {
  args: {
    text: "Hello, world!",
  },
};
