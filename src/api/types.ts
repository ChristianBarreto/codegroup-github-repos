export interface User {
  login: string,
  id: number
}
export type Users = User[];

export type UsersResp = {
  imcomplete_results: boolean;
  total_count: number,
  items: Users,
}

