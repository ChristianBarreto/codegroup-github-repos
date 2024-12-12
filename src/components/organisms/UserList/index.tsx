import { Col, Container, Row } from "react-bootstrap";
import UserCard from "../../cells/UserCard";
import { Users } from "../../../api/types";

export default function UserList({
  users,
}: {
  users: Users
}) {

  return (
    <Container>
      <Row>
        {users.map((user) => (
          <Col sm={12} md={6} lg={4} key={user.id}>
            <UserCard key={user.id} user={user} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}