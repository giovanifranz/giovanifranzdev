import { GetStaticProps, GetStaticPaths } from "next";
import { api } from "../../service/api";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const About = dynamic(() => import("../../containers/About"));
const Work = dynamic(() => import("../../containers/Work"));
const More = dynamic(() => import("../../containers/More"));
const Repos = dynamic(() => import("../../containers/Repos"));

interface SobreProps {
  Github: GithubProps;
  GithubRepos: GithubReposProps;
}

export interface GithubProps {
  avatar_url: string;
  bio: string;
  company: string;
  email: string;
}

export interface GithubReposProps {
  id: number;
  name: string;
  description: string;
  html_url: string;
  topics: string[];
}

export default function Home({ Github, GithubRepos }: SobreProps) {
  const route = useRouter().asPath;

  return (
    <>
      {route === "/about" && <About />}
      {route === "/work" && <Work />}
      {route === "/more" && <More value={Github} />}
      {route === "/repos" && <Repos value={GithubRepos} />}
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { slug: "about" } },
      { params: { slug: "work" } },
      { params: { slug: "more" } },
      { params: { slug: "repos" } },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  const Github: GithubProps = await api
    .get("/giovanifranz")
    .then((res) => res.data);
  const GithubRepos: GithubReposProps = await api
    .get("/giovanifranz/repos")
    .then((res) => res.data);
  return {
    props: {
      Github,
      GithubRepos,
    },
    revalidate: 60 * 60 * 24,
  };
};
