import { Container, Stack } from 'react-bootstrap';
import Hero from '../../organisms/Hero';
import UserList from '../../organisms/UserList';
import { useEffect, useState } from 'react';
import { searchGitHubUsers } from '../../../api';
import { Users, UsersResp } from '../../../api/types';

export default function MainPage() {
  const [users, setUsers] = useState<Users>();
  
  useEffect(() => {
    searchGitHubUsers("Chris").then((res) => {
      console.log(res)
      setUsers(res.items)
    }).catch((err) => {

    })

  }, []);

  return (
    <Container>
      <Stack gap={3}>
        <Hero />
        {users?.length ? (
          <UserList users={users}/>
        ): (
          <p>No users</p>
        )}
      </Stack>
    </Container>
  )
}