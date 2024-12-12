import axios from 'axios';
import { Users, UsersResp } from './types';

// Define the base URL for the GitHub API
const GITHUB_API_BASE_URL = 'https://api.github.com';

// Function to perform a GET request to the GitHub API
const fetchGitHubData = (endpoint: string): Promise<any> => new Promise((resolve, reject) => {
  axios.get(`${GITHUB_API_BASE_URL}${endpoint}`, {
    headers: {
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'GitHub-API-Client',
    },
  }).then((res) => {
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

// Function to search for users
export async function searchGitHubUsers(query: string): Promise<UsersResp> {
  const endpoint = `/search/users?q=${encodeURIComponent(query)}`;
  const res = await fetchGitHubData(endpoint);
  return (res.data)
}
