import React from "react";
import { HeaderLayout } from "../atoms/HeaderLayout";
import { Content } from "../molecules/Content";
import { Aside } from "../atoms/Aside";
import { Main } from "../atoms/Main";
import { Footer } from "../atoms/Footer";

export const Layout = ({ children, ...props }) => {
  return (
    <div class="mx-auto flex h-[calc(100vh-2rem)] flex-col space-y-4 font-mono text-sm font-bold leading-6 text-white">
      <HeaderLayout>Header</HeaderLayout>
      <Content>
        <Aside>Aside</Aside>
        <Main>Main</Main>
      </Content>
      <Footer>Footer</Footer>
      {children}
    </div>
  );
};
