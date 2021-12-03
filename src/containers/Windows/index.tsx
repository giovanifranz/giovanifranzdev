import { ReactNode, useState } from "react";
import { Section } from "./styles";
import { IoMdExit } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

interface WindowsProps {
  children: ReactNode;
}

export default function Windows({ children }: WindowsProps) {
  const router = useRouter();
  const MotionWindows = motion(Section);
  const [isVisible, setIsVisible] = useState(true);

  const containerVariants = {
    hidden: {
      opacity: 0,
      x: "100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
      },
    },
  };

  function onRequestClose() {
    setIsVisible(!isVisible);
    setTimeout(() => {
      router.push("/");
    }, 250);
  }

  return (
    <MotionWindows
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      drag
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <AnimatePresence>
        {isVisible && (
          <motion.article exit={{ x: -1500 }}>
            <header>
              <button onClick={onRequestClose}>
                <IoMdExit size={32} className="icon" />
              </button>
            </header>
            {children}
          </motion.article>
        )}
      </AnimatePresence>
    </MotionWindows>
  );
}
