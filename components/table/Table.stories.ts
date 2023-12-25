// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/vue3";

import Table from "./Table.vue";

const meta: Meta<typeof Table> = {
  title: "table/Table",
  component: Table,
  argTypes: {
    color: {
      type: "select",
      options: [
        "slate",
        "gray",
        "zinc",
        "neutral",
        "stone",
        "red",
        "orange",
        "amber",
        "yellow",
        "lime",
        "green",
        "emerald",
        "teal",
        "cyan",
        "sky",
        "blue",
        "indigo",
        "violet",
        "purple",
        "fuchsia",
        "pink",
        "rose",
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const component: Story = {
  args: {
    datas: [
      {
        make: "Toyota",
        model: "Celica",
        year: "2001",
        color: "white",
        stock: 10,
      },
      {
        make: "Ford",
        model: "Mondeo",
        year: "2002",
        color: "green",
        stock: 12,
      },
      {
        make: "Porsche",
        model: "Boxter",
        year: "2000",
        color: "red",
        stock: 2,
      },
      {
        make: "Toyota",
        model: "Celica",
        year: "2001",
        color: "white",
        stock: 10,
      },
      {
        make: "Ford",
        model: "Mondeo",
        year: "2002",
        color: "green",
        stock: 12,
      },
      {
        make: "Porsche",
        model: "Boxter",
        year: "2000",
        color: "red",
        stock: 2,
      },
    ],
  },
};
