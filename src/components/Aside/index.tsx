import { Aside as AsideComponent, Box } from "./styles";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import NextLink from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Aside() {
  const MotionAside = motion(AsideComponent);
  const MotionBox = motion(Box);

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: "100vh",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.5,
      },
    },
  };

  return (
    <MotionAside
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence>
        <MotionBox exit={{ y: 1500 }}>
          <NextLink href="https://www.facebook.com/giovanifranz">
            <a>
              <FaFacebook size={32} />
            </a>
          </NextLink>
          <NextLink href="https://www.linkedin.com/in/giovanifranz/">
            <a>
              <FaLinkedin size={32} />
            </a>
          </NextLink>
          <NextLink href="https://github.com/giovanifranz">
            <a>
              <FaGithub size={32} />
            </a>
          </NextLink>
          <div />
        </MotionBox>
      </AnimatePresence>
    </MotionAside>
  );
}
