import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { User } from '../../../api/types';

export default function UserCard({
  user,
}: {
  user: User
}) {
  return (
    <Card className='mb-4 shadow-sm'>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{user.login}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};