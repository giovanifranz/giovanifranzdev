import { Section } from "./styles";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function Hello() {
  const router = useRouter();

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
      <motion.button onClick={() => router.push('/work')} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        Mais informações
      </motion.button>
    </Section>
  );
}
