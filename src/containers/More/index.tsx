import Image from "next/image";
import { useQuery } from "react-query";
import { api } from "../../service/api";
import { Section } from "./styles";
import { AiOutlineMail, AiOutlineArrowDown } from "react-icons/ai";
import NextLink from "next/link";
import Button from "../../components/Button";
import { useRouter } from "next/router";
export default function More() {
  const Github = useQuery("github", async () =>
    api.get("/giovanifranz").then((res) => res.data)
  );

  const router = useRouter();

  function handleClick() {
    setTimeout(() => {
      router.push("/repos");
    }, 250);
  }

  return (
    <>
      {Github.data && !Github.isLoading && (
        <Section>
          <article>
            <Image
              src={Github.data.avatar_url}
              height={200}
              width={200}
              priority
            />
            <div>
              <p>
                {Github.data.bio}
                <br />
                <br />
                Company: {Github.data.company}
              </p>
              <div>
                <AiOutlineMail size={32} />
                <NextLink href={`mailto:${Github.data.email}`}>
                  <a>{Github.data.email}</a>
                </NextLink>
              </div>
            </div>
          </article>
          <Button onClick={handleClick}>Repositórios <AiOutlineArrowDown className="icon" size={30}/></Button>
        </Section>
      )}
    </>
  );
}
