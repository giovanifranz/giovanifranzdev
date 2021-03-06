import { Box } from "./styles";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Button from "../../components/Button";
import { variantX } from "../../utils/variants";

export default function Hello() {
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();
  const MotionBox = motion(Box);

  function handleClick() {
    setIsVisible(!isVisible);
    setTimeout(() => {
      router.push("/more");
    }, 250);
  }

  return (
    <motion.article variants={variantX} initial="hidden" animate="visible">
      <AnimatePresence>
        {isVisible && (
          <MotionBox exit={{ x: -1500 }}>
            <h6>Olá, meu nome é:</h6>
            <h1>Giovani Franz</h1>
            <h2>Eu sou um desenvolvedor front-end</h2>
            <p>
              Sou Engenheiro de Software Frontend e ocasionalmente Freelancer,
              estou sempre estudando e testando tecnologias novas. Venha me
              conhecer <span>&#128075;</span>
            </p>
            <Button onClick={handleClick}>
              Mais informações <AiOutlineArrowRight className="icon" />
            </Button>
          </MotionBox>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
