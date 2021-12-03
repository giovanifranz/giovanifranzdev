import { useQuery } from "react-query";
import { api } from "../../service/api";
import Card from "../../components/Card";
import { ReposContainer } from "./styles";
export function Repos() {
  const Repos = useQuery("repos", async () =>
    api.get("/giovanifranz/repos").then((res) => res.data)
  );

  return (
    <ReposContainer>
      {Repos.data &&
        !Repos.isLoading &&
        Repos.data.map((repo) => {
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
