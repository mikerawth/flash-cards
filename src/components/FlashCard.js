import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import EditModal from "./EditModal"; // Import the modal component

function FlashCard({ flashcard, onDelete, onUpdate }) {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleSave = (updatedFlashcard) => {
    onUpdate(updatedFlashcard);
  };

  return (
    <>
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>{flashcard.title}</Card.Title>
          <Card.Text>{flashcard.content}</Card.Text>
          <Button variant="primary" onClick={handleShow}>
            Edit
          </Button>{" "}
          <Button variant="danger" onClick={() => onDelete(flashcard._id)}>
            Delete
          </Button>
        </Card.Body>
      </Card>
      <EditModal
        show={showModal}
        handleClose={handleClose}
        flashcard={flashcard}
        handleSave={handleSave}
      />
    </>
  );
}

export default FlashCard;
