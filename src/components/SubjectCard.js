import React from "react";
import { Button, Card } from "react-bootstrap";

function SubjectCard({ title, content }) {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>
  );
}

export default SubjectCard;
