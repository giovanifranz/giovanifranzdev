import { useQuery } from "react-query";
import { api } from "../../service/api";
import Card from "../../components/Card";
import { ReposContainer } from "./styles";
import { GithubReposProps } from "../../pages/[slug]";

export interface ReposProps {
  value: GithubReposProps;
}

export default function Repos({ value }: ReposProps) {
  const { data, isLoading } = useQuery(
    "github",
    async () => {
      const { data } = await api.get("/giovanifranz/repos");
      return data;
    },
    {
      initialData: value,
    }
  );

  return (
    <ReposContainer>
      {data &&
        !isLoading &&
        data.map((repo) => {
          if (repo.description === null) {
            return;
          }
          if (repo.topics.length < 5) {
            return;
          }
          return (
            <Card
              key={repo.id}
              title={repo.name}
              description={repo.description}
              url={repo.html_url}
              topics={repo.topics}
            />
          );
        })}
    </ReposContainer>
  );
}
