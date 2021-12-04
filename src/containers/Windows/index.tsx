import { ReactNode, useState } from "react";
import { Section } from "./styles";
import { IoMdExit } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { variantY } from "../../utils/variants";

interface WindowsProps {
  children: ReactNode;
}

export default function Windows({ children }: WindowsProps) {
  const router = useRouter();
  const MotionWindows = motion(Section);
  const [isShow, setIsShow] = useState(true);

  function onRequestClose() {
    setIsShow(false);
    setTimeout(() => {
      router.push("/");
    }, 250);
  }

  return (
    <MotionWindows
      variants={variantY}
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
        {isShow && (
          <motion.article exit={{ y: -1500 }}>
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
