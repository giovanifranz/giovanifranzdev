/** @jsxImportSource @emotion/react */
import { ReactNode } from "react";
import { css } from "@emotion/react";
import { Section } from "./styles";
import { IoMdExit } from "react-icons/io";

interface WindowsProps {
  width: string;
  children: ReactNode;
}

export default function Windows({ width, children }: WindowsProps) {
  return (
    <Section
      css={css`
        width: ${width};
      `}
    >
      <header>
        <IoMdExit size={32} className="icon" />
      </header>
      {children}
    </Section>
  );
}
