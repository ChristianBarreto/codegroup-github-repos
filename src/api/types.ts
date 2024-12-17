export interface User {
  login: string,
  id: number
  avatar_url: string
}
export type Users = User[];

export type UsersResp = {
  imcomplete_results: boolean;
  total_count: number,
  items: Users,
}

export interface Repo {
  name: string,
  id: number,
  stargazers_count: number,
  full_name: string,
  description: string,
  language: string,
  html_url: string,
}

export type Repos = Repo[];