import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import "./SubjectCard.css";

function SubjectCard() {
  return (
    <Card className="SubjectCard">
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default SubjectCard;
