import { Section } from "./styles";
import { motion } from "framer-motion";

export default function Hello() {
  return (
    <Section>
      <h6>Olá, meu nome é:</h6>
      <h1>Giovani Franz</h1>
      <h2>Eu sou um desenvolvedor front-end</h2>
      <p>
        Sou Engenheiro de Software Frontend e ocasionalmente Freelancer, estou
        sempre estudando e testando tecnologias novas. Venha me conhecer{" "}
        <span>&#128075;</span>
      </p>
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        Mais informações
      </motion.button>
    </Section>
  );
}
