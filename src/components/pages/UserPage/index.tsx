import { useEffect, useState } from "react";
import { getGitHubRepos, getGitHubUser } from "../../../api";
import { useParams } from "react-router-dom";
import { Repos, User } from "../../../api/types";
import RepoTable from "../../cells/RepoTable";

export default function UserPage() {
  const [user, setUser] = useState<User>();
  const [repos, setRepos] = useState<Repos>();
  const { id } = useParams();
  
  useEffect(() => {
    id && getGitHubUser(id).then((res) => {
      setUser(res)
      getGitHubRepos(id).then((res) => {
        setRepos(res);
      })
    }).catch((err) => {
      console.log(err)
    });

  }, [])
  return (
    <div className="m-4">
      <h1 className="">User: {user?.login}</h1>
      <h3>Check below the repositores</h3>
      <RepoTable repos={repos} />
    </div>
  )
}