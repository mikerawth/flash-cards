import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import "./SubjectCard.css";

function SubjectCard(props) {
  return (
    <Card className="SubjectCard">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.content}</Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>
  );
}

export default SubjectCard;
