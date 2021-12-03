import { Container, Nav } from "./styles";
import Image from "next/image";

export default function Header() {
  return (
    <Container>
      <Image src="/logo.png" alt="Giovani Franz" width={52} height={52} />
      <Nav>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
      </Nav>
    </Container>
  );
}
