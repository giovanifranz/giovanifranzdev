/** @jsxImportSource @emotion/react */
import { ReactNode } from "react";
import { css } from "@emotion/react";
import { Section } from "./styles";
import { IoMdExit } from "react-icons/io";
import { motion } from "framer-motion";

interface WindowsProps {
  width: string;
  children: ReactNode;
}

export default function Windows({ width, children }: WindowsProps) {
  const MotionSection = motion(Section);
  return (
    <MotionSection
      css={css`
        width: ${width};
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
        <IoMdExit size={32} className="icon" />
      </header>
      {children}
    </MotionSection>
  );
}
