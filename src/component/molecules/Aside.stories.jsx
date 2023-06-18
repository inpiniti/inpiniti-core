import { Aside } from "./Aside";
import { Button } from "../atoms/Button";

export default {
  title: "molecules/Aside",
  component: Aside,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
};

export const AsideTemplate = {
  render: (args) => (
    <Aside>
      <Button>Find talent</Button>
      <Button>For designers</Button>
      <Button>Inspiration</Button>
      <Button>Learn design</Button>
    </Aside>
  ),
};
