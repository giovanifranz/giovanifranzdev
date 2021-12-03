import { Box } from "./styles";
import motion from "framer-motion";

interface CardProps {
  title: string;
  description: string;
  url: string;
  topics: string[];
}

export default function Card({ title, description, url, topics }: CardProps) {
  return (
    <Box>
      <h1>{title}</h1>
      <p>{description}</p>
      <div>
        {topics.map((topic: string) => {
          return <span key={topic}>{topic}</span>;
        })}
      </div>
    </Box>
  );
}
