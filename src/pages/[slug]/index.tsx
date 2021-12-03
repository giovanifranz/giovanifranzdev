import About from "../../components/About";
import Work from "../../containers/Work";
import More from "../../containers/More";

import { useRouter } from "next/router";
import { Repos } from "../../containers/Repos";

export default function Sobre() {
  const route = useRouter().asPath;

  return (
    <>
      {route === "/about" && <About />}
      {route === "/work" && <Work />}
      {route === "/more" && <More />}
      {route === "/repos" && <Repos />}
    </>
  );
}
