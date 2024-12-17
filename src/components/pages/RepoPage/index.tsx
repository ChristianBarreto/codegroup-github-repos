import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getGitHubRepo } from "../../../api";
import { Repo } from "../../../api/types";

export default function RepoPage() {
  const [repo, setRepo] = useState<Repo>();
  const {id} = useParams();
  
  useEffect(() => {
    id && getGitHubRepo(id.replace('*', '/')).then((res) => {
      setRepo(res);
    })
  }, [])
  return (
    <div className="m-4">
      <h1>Repo: {repo?.name}</h1>
      <p>Description: {repo?.description}</p>
      <p>Stars: {repo?.stargazers_count}</p>
      <p>Link: <a href={repo?.html_url} target="_blank" rel="noreferrer">(click here to check the repo)</a></p>
    </div>
  )
}