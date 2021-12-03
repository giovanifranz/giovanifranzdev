import Image from "next/image";
import { Article } from "./styles";
import Windows from "../../containers/Windows";

export default function About() {
  return (
    <Windows width="1140px">
      <Article>
        <div>
          <h2>Sobre mim</h2>
          <p>
            Meu nome é <strong>Giovani Franz</strong>, tenho <strong>26</strong>
            , sou formado em Mecatrônica e Automação Industrial pelo SENAI.
            Porém não exerço a profissão porque acabei me apaixando pela TI nos
            primeiros contatos que tive com desenvolvimento, na época em C, C++.
            <br />
            <br />
            Durante a graduação em Automação Industrial eu era estagiário na
            TMSA e lá eu trabalhava com uma secadora de grãos que era programada
            em C e também trabalhava com servidores <strong>Linux</strong>{" "}
            voltados para telefonia VOIP. Tomei a decisão de entrar em na
            graduação em Ciência da Computação, onde eu acabei conhecendo mais
            sobre a área de TI, porém eu não consegui finalizar o curso devido à
            dificuldade financeiras na época.
            <br />
            <br />
            Comecei então a trabalhar com montagem e manutenção de computadores,
            no ano de 2019 como MEI e me mantive assim até 2020, no entanto com
            o surgimentos de novas ondas da COVID-19 e a alta do dólar no Brasil
            o meu negócio era inviavel e precisei procurar novas possibilidade,
            e por quê não a programação?
            <br />
            <br />
            Vendi todos os componentes de computador que tinha no estoque e
            investi em cursos, muitos cursos, alguns estou fazendo até então.
            Comecei a programar em fevereiro sem saber nenhuma tag HTML, em
            junho abri uma Micro Empresa para começar a vender serviços de
            desenvolvimento como freelancer e em outubro do mesmo ano consegui
            minha primeira oportunidade de emprego já como Engenheiro de
            Software Frontend na Hypeflame.
          </p>
        </div>
        <Image
          src="/illustrationHome.svg"
          alt="Ilustração"
          width={360}
          height={500}
        />
      </Article>
    </Windows>
  );
}
