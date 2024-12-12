import { Button, Col, Container, Row } from "react-bootstrap";
import Input from "../../atoms/Input";

export default function Hero() {

  return (
    <div className="text-bg-light p-4">
      <h1>Search for GitHub users</h1>
      <h4 className="text-secondary">Explore their awesome projects</h4>
      <div>
        <Input
          type="text"
          label="Type the user name"
          helperText="Ex. ChristianBarreto"
          actionButton="Search"
        />
      </div>
    </div>
  )
}