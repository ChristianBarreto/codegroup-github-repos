import { Button, Container, Stack } from 'react-bootstrap';
import Hero from '../../organisms/Hero';
import UserList from '../../organisms/UserList';



export default function MainPage() {
  return (
    <Container>
      <Stack gap={3}>
        <Hero />
        <UserList />
      </Stack>
    </Container>
  )
}