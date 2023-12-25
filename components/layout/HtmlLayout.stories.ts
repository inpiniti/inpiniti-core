// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/vue3";

import HtmlLayout from "./HtmlLayout.vue";
import Temp from "../elements/Temp.vue";
import { render } from "vue";

const meta: Meta<typeof HtmlLayout> = {
  title: "layout/HtmlLayout",
  component: HtmlLayout,
};

export default meta;
type Story = StoryObj<typeof HtmlLayout>;

export const component: Story = {
  render: () => ({
    components: {
      Temp,
      HtmlLayout,
    },
    template: `<HtmlLayout>
      <template v-slot:header>
        <Temp text="header : 머릿말" />
      </template>
      <template v-slot:nav>
        <Temp text="nav : 메뉴" />
      </template>
      <template v-slot:section>
        <Temp text="section : 콘텐츠" />
      </template>
      <template v-slot:articel>
        <Temp text="articel : 콘텐츠 (독립적으로 하나의 콘텐츠를 이룰때)" />
      </template>
      <template v-slot:aside>
        <Temp text="aside : side bar" />
      </template>
      <template v-slot:footer>
        <Temp text="footer : 제작자, 저작권 표시" />
      </template>
    </HtmlLayout>
    `,
  }),
};
