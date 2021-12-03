import { ButtonComponent } from "./styles";
import { ReactNode } from "react";
import { motion } from "framer-motion";
interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

export default function Button({ children, onClick }: ButtonProps) {
  const MotionButton = motion(ButtonComponent);

  return (
    <MotionButton
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </MotionButton>
  );
}
