import React from "react";
import { HeaderLayout } from "../atoms/HeaderLayout";
import { Button } from "../atoms/Button";

export const Header = ({ children, ...props }) => {
  return (
    <HeaderLayout>
      <div className="flex flex-nowrap gap-2 w-full overflow-x-auto">
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
      </div>
    </HeaderLayout>
  );
};
