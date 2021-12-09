import { ButtonComponent } from "./styles";
import { ReactNode } from "react";
import { motion } from "framer-motion";
interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  vertical?: boolean;
}

export default function Button({ children, onClick, vertical }: ButtonProps) {
  const MotionButton = motion(ButtonComponent);

  const variant = vertical && "rotate(270deg)" ;
  return (
    <MotionButton
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{transform: variant}}
    >
      {children}
    </MotionButton>
  );
}
