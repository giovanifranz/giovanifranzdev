import Image from "next/image";
import { useQuery } from "react-query";
import { api } from "../../service/api";
import { Section, ButtonVertical } from "./styles";
import { AiOutlineMail, AiOutlineArrowDown } from "react-icons/ai";
import NextLink from "next/link";
import Button from "../../components/Button";
import { useRouter } from "next/router";
import { GithubProps } from "../../pages/[slug]";
import { motion, AnimatePresence } from "framer-motion";
import { variantX, variantY } from "../../utils/variants";
import { useState } from "react";

export interface MoreProps {
  value: GithubProps;
}

export default function More({ value }: MoreProps) {
  const [variant, setVariant] = useState(variantX);
  const [isShow, setIsShow] = useState(true);
  const { data, isLoading } = useQuery(
    "github",
    async () => {
      const { data } = await api.get("/giovanifranz");
      return data;
    },
    {
      initialData: value,
    }
  );
  const router = useRouter();
  function handleClick() {
    setVariant(variantY);
    setIsShow(false);
    router.push("/repos");
  }

  const MotionSection = motion(Section);
  return (
    <motion.div variants={variant} initial="hidden" animate="visible">
      <AnimatePresence>
        {data && isShow && !isLoading && (
          <MotionSection exit={{ y: -1500 }}>
            <article>
              <Image
                src={data.avatar_url}
                height={200}
                width={200}
                priority
                alt={data.name}
              />
              <div>
                <p>
                  {data.bio}
                  <br />
                  <br />
                  Company: {data.company}
                </p>
                <div>
                  <AiOutlineMail size={32} />
                  <NextLink href={`mailto:${data.email}`}>
                    <a>{data.email}</a>
                  </NextLink>
                </div>
              </div>
              <ButtonVertical onClick={() => console.log("teste")}>
                Projetos <AiOutlineArrowDown className="icon" />
              </ButtonVertical>
            </article>
            <Button onClick={handleClick}>
              Repositórios <AiOutlineArrowDown className="icon" />
            </Button>
          </MotionSection>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
