import About from "../../components/About";
import Work from "../../components/Work";
import More from "../../containers/More";

import { useRouter } from "next/router";

export default function Sobre() {
  const route = useRouter().asPath;

  return (
    <>
      {route === "/about" && <About />}
      {route === "/work" && <Work />}
      {route === "/more" && <More />}
    </>
  );
}
