import { Container, Stack } from 'react-bootstrap';
import Hero from '../../organisms/Hero';
import UserList from '../../organisms/UserList';
import { useEffect, useState } from 'react';
import { searchGitHubUsers } from '../../../api';
import { Users } from '../../../api/types';

export default function MainPage() {
  const [search, setSearch] = useState('ChristianBarreto');
  const [users, setUsers] = useState<Users>();
  
  useEffect(() => {
    handleSearch(search);
  }, []);

  const handleSearch = (searchCriteria: string) => {
    console.log("CRI", searchCriteria)
    searchGitHubUsers(searchCriteria).then((res) => {
      console.log(res)
      setUsers(res.items)
    }).catch((err) => {

    })
  }

  const handleSearchClick = () => {
    handleSearch(search)
  }

  return (
    <Container>
      <Stack gap={3}>
        <Hero 
          search={search}
          setSearch={setSearch}  
          handleSearchClick={handleSearchClick}
        />
        {users?.length ? (
          <UserList users={users}/>
        ): (
          <p>No users</p>
        )}
      </Stack>
    </Container>
  )
}