import { Container, Nav } from "./styles";
import Image from "next/image";
import NextLink from "next/link";

export default function Header() {
  return (
    <Container>
      <NextLink href="/">
        <a>
          <Image src="/logo.png" alt="Giovani Franz" width={52} height={52} />
        </a>
      </NextLink>
      <Nav>
        <NextLink href="/">
          <a>Home</a>
        </NextLink>
        <NextLink href="/about">
          <a>About</a>
        </NextLink>
        <NextLink href="/">
          <a>Contact</a>
        </NextLink>
      </Nav>
    </Container>
  );
}
