import { Aside as AsideComponent, Content } from "./styles";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Aside() {
  return (
    <AsideComponent>
      <Content>
        <FaFacebook className="icon" size={32} />
        <FaLinkedin className="icon" size={32} />
        <FaGithub className="icon" size={32} />

        <div />
      </Content>
    </AsideComponent>
  );
}
