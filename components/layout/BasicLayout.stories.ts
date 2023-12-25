// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/vue3";

import BasicLayout from "./BasicLayout.vue";
import Temp from "../elements/Temp.vue";
import Nav from "../nav/Nav.vue";
import Header from "../headings/Header.vue";

const meta: Meta<typeof BasicLayout> = {
  title: "layout/BasicLayout",
  component: BasicLayout,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof BasicLayout>;

export const component: Story = {
  render: () => ({
    components: {
      Temp,
      BasicLayout,
    },
    template: `<BasicLayout>
      <template v-slot:header>
        <Temp text="header : 머릿말" />
      </template>
      <template v-slot:nav>
        <Temp text="nav : 메뉴" />
      </template>
      <template v-slot:section>
        <Temp text="section : 콘텐츠" />
      </template>
    </BasicLayout>
    `,
  }),
};

export const nav: Story = {
  render: () => ({
    components: {
      BasicLayout,
      Temp,
      Nav,
      Header,
    },
    template: `<BasicLayout>
      <template v-slot:header>
        <Header label="APPLE" icon="apple-whole" dark />
      </template>
      <template v-slot:nav>
        <Nav active="ship" />
      </template>
      <template v-slot:section>
        <Temp text="section : 콘텐츠" />
      </template>
    </BasicLayout>
    `,
  }),
};
