import { Aside as AsideComponent, Box } from "./styles";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import NextLink from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface LinkProps {
  children: ReactNode;
  href: string;
}
function Link({ children, href }: LinkProps) {
  return (
    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
      <NextLink href={href}>
        <a>{children}</a>
      </NextLink>
    </motion.div>
  );
}

export default function Aside() {
  return (
    <AsideComponent>
      <Box>
        <Link href="https://www.facebook.com/giovanifranz">
          <FaFacebook size={32} />
        </Link>
        <Link href="https://www.linkedin.com/in/giovanifranz/">
          <FaLinkedin size={32} />
        </Link>
        <Link href="https://github.com/giovanifranz">
          <FaGithub size={32} />
        </Link>
        <div id="line" />
      </Box>
    </AsideComponent>
  );
}
