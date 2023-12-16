// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/vue3";

import Map from "./Map.vue";

const meta: Meta<typeof Map> = {
  title: "map/Map",
  component: Map,
};

export default meta;
type Story = StoryObj<typeof Map>;

export const component: Story = {};
