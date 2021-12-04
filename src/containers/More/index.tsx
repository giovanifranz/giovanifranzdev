import Image from "next/image";
import { useQuery } from "react-query";
import { api } from "../../service/api";
import { Section } from "./styles";
import { AiOutlineMail, AiOutlineArrowDown } from "react-icons/ai";
import NextLink from "next/link";
import Button from "../../components/Button";
import { useRouter } from "next/router";
import { GithubProps } from "../../pages/[slug]";

interface MoreProps {
  value: GithubProps;
}
export default function More({ value }: MoreProps) {
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
    setTimeout(() => {
      router.push("/repos");
    }, 250);
  }

  return (
    <>
      {data && !isLoading && (
        <Section>
          <article>
            <Image src={data.avatar_url} height={200} width={200} priority />
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
          </article>
          <Button onClick={handleClick}>
            Repositórios <AiOutlineArrowDown className="icon" />
          </Button>
        </Section>
      )}
    </>
  );
}
