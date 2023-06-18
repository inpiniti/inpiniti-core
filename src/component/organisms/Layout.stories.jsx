import { Layout } from "./Layout";
import { Header } from "../molecules/Header";
import { Content } from "../molecules/Content";
import { Aside } from "../molecules/Aside";
import { Main } from "../atoms/Main";
import { Footer } from "../atoms/Footer";
import { Button } from "../atoms/Button";

export default {
  title: "organisms/Layout",
  component: Layout,
  tags: ["autodocs"],
};

export const LayoutTemplate = {
  render: (args) => (
    <Layout>
      <Header>
        Naver
        <Button>메일</Button>
        <Button>카페</Button>
        <Button>블로그</Button>
        <Button>쇼핑</Button>
        <Button>뉴스</Button>
        <Button>증권</Button>
        <Button>부동산</Button>
        <Button>지도</Button>
        <Button>웹툰</Button>
      </Header>
      <Content>
        <Aside>
          <Button>Find talent</Button>
          <Button>For designers</Button>
          <Button>Inspiration</Button>
          <Button>Learn design</Button>
        </Aside>
        <Main>Main</Main>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  ),
};
