import { Col, Container, Row } from "react-bootstrap";
import UserCard from "../../cells/UserCard";

export default function UserList() {

  return (
    <Container>
      <Row>
        <Col sm={12} md={6} lg={4}>
          <UserCard />
        </Col>
        <Col sm={12} md={6} lg={4}>
          <UserCard />
        </Col>
        <Col sm={12} md={6} lg={4}>
          <UserCard />
        </Col>
        <Col sm={12} md={6} lg={4}>
          <UserCard />
        </Col>
        <Col sm={12} md={6} lg={4}>
          <UserCard />
        </Col>
        <Col sm={12} md={6} lg={4}>
          <UserCard />
        </Col>
        <Col sm={12} md={6} lg={4}>
          <UserCard />
        </Col>
        <Col sm={12} md={6} lg={4}>
          <UserCard />
        </Col>
      </Row>
    </Container>
  )
}