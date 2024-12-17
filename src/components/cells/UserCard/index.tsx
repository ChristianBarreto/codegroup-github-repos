import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { User } from '../../../api/types';
import { Link } from 'react-router-dom';

export default function UserCard({
  user,
}: {
  user: User
}) {
  return (
    <Card className='mb-4 shadow-sm'>
      <Card.Img variant="top" src={user.avatar_url} />
      <Card.Body>
        <Card.Title>{user.login}</Card.Title>
        <Card.Text>
          Click on button below to see more details.
        </Card.Text>
        <Link to={`/users/${user.login}`}>
          <Button variant="primary">View details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};