import { Box } from "./styles";
import { motion } from "framer-motion";
import NextLink from "next/link";

interface CardProps {
  title: string;
  description: string;
  url: string;
  topics: string[];
}

export default function Card({ title, description, url, topics }: CardProps) {
  const MotionBox = motion(Box);

  return (
    <MotionBox whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <NextLink href={url}>
        <a>
          <h1>{title}</h1>
          <p>{description}</p>
          <div>
            {topics.slice(0,12).map((topic: string) => {
              return <span key={topic}>{topic}</span>;
            })}
          </div>
        </a>
      </NextLink>
    </MotionBox>
  );
}
