import { motion } from "framer-motion";
import { Card, Section } from "./styles";
import oriental from "../../assets/oriental.png";

export default function Projects() {
  const MotionProjects = motion(Section);

  return (
    <MotionProjects>
      <Card style={{ backgroundImage: `url(${oriental})` }}></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </MotionProjects>
  );
}
