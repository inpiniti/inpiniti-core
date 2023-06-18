import { Header } from "./Header";
import { Button } from "../atoms/Button";

export default {
  title: "molecules/Header",
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
};

export const HeaderTemplate = {
  render: (args) => (
    <Header>
      Header
      <Button>aaa</Button>
      <Button>bbb</Button>
      <Button>ccc</Button>
      <Button>aaa</Button>
      <Button>bbb</Button>
      <Button>ccc</Button>
      <Button>aaa</Button>
      <Button>bbb</Button>
      <Button>ccc</Button>
      <Button>aaa</Button>
      <Button>bbb</Button>
      <Button>ccc</Button>
      <Button>aaa</Button>
      <Button>bbb</Button>
      <Button>ccc</Button>
      <Button>aaa</Button>
    </Header>
  ),
};
