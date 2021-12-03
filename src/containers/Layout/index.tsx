import { Container, Content } from "./styles";
import Header from "../../components/Header";
import Aside from "../../components/Aside";
import Hello from "../Hello";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <Container>
        <Aside />
        <Content>
          {children}
        </Content>
      </Container>
    </>
  );
}
