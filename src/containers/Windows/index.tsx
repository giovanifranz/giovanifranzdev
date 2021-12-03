/** @jsxImportSource @emotion/react */
import { ReactNode } from "react";
import { css } from "@emotion/react";
import { Section } from "./styles";
import { IoMdExit } from "react-icons/io";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

interface WindowsProps {
  width: string;
  height: string;
  children: ReactNode;
}

export default function Windows({ width, height, children }: WindowsProps) {
  const router = useRouter();

  function onRequestClose() {
    router.push("/");
  }

  const MotionSection = motion(Section);
  return (
    <MotionSection
      css={css`
        width: ${width};
        height: ${height};
      `}
      drag
      dragConstraints={{
        top: -50,
        left: -50,
        right: 50,
        bottom: 50,
      }}
    >
      <header>
        <button onClick={onRequestClose}>
          <IoMdExit size={32} className="icon" />
        </button>
      </header>
      {children}
    </MotionSection>
  );
}
