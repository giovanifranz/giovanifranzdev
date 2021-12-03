import type { NextPage } from "next";
import { Container, Content } from "../styles/home";
import Header from "../components/Header";
import Aside from "../components/Aside";
import Hello from "../components/Hello";
import About from "../components/About";
import Work from "../components/Work";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Container>
        <Aside />
        <Content>
          <Hello />
          {false && <About />}
          {true && <Work />}
        </Content>
      </Container>
    </>
  );
};

export default Home;
