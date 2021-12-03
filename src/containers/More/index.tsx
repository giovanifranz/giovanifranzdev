import Windows from "../Windows";
import Image from "next/image";
import { useQuery } from "react-query";
import { api } from "../../service/api";
import { Section } from "./styles";
import { AiOutlineMail } from "react-icons/ai";
import NextLink from "next/link";

export default function More() {
  const { data, isLoading } = useQuery("github", async () =>
    api.get("/giovanifranz").then((res) => res.data)
  );
  console.log(data);

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
                <br />
                <br />
                <div>
                  <AiOutlineMail size={32} />
                  <NextLink href={`mailto:${data.email}`}>
                    <a>{data.email}</a>
                  </NextLink>
                </div>
              </p>
            </div>
          </article>

          <h2>Portifólio</h2>
          <p>public_repos:{data.public_repos}</p>
          <p>repos_url:{data.repos_url}</p>
        </Section>
      )}
    </>
  );
}
