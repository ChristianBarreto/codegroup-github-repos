import axios from 'axios';
import { Repo, Repos, User, Users, UsersResp } from './types';

const GITHUB_API_BASE_URL = 'https://api.github.com';

console.log(process.env)

const fetchGitHubData = (endpoint: string): Promise<any> => new Promise((resolve, reject) => {
  axios.get(`${GITHUB_API_BASE_URL}${endpoint}`).then((res) => {
    resolve(res);

  }).catch((err) => {
    if (axios.isAxiosError(err)) {
      console.error('Error fetching data from GitHub API:', err.message);
    } else {
      console.error('Unexpected error:', err);
    }
    reject({
      imcomplete_results: false,
      items: [] as Users,
      total_count: 0
    });
  })
  
})

export async function searchGitHubUsers(query: string): Promise<UsersResp> {
  const endpoint = `/search/users?q=${encodeURIComponent(query)}`;
  const res = await fetchGitHubData(endpoint);
  return (res.data)
}

export async function getGitHubUser(id: string): Promise<User> {
  const endpoint = `/users/${id}`;
  const res = await fetchGitHubData(endpoint);
  return (res.data)
}

export async function getGitHubRepos(id: string): Promise<Repos> {
  const endpoint = `/users/${id}/repos`;
  const res = await fetchGitHubData(endpoint);
  return (res.data)
}

export async function getGitHubRepo(id: string): Promise<Repo> {
  const endpoint = `/repos/${id}`;
  const res = await fetchGitHubData(endpoint);
  return (res.data)
}
