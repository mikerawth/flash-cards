import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import SearchBar from "../components/SearchBar";
import FlashCard from "../components/FlashCard";
import CreateModal from "../components/CreateModal";
import {
  getFlashcards,
  updateFlashcard,
  deleteFlashcard,
  createFlashcard,
} from "../services/apiService";

const FlashCards = () => {
  const [flashcards, setFlashcards] = useState([]); // Store all flashcards
  const [filteredSubjects, setFilteredSubjects] = useState([]); // Data to display
  const [showCreateModal, setShowCreateModal] = useState(false);

  useEffect(() => {
    const fetchFlashcards = async () => {
      try {
        const data = await getFlashcards();
        setFlashcards(data); // Store all flashcards
        setFilteredSubjects(data); // Display all flashcards by default
      } catch (error) {
        console.error("Error fetching flashcards:", error);
      }
    };
    fetchFlashcards();
  }, []);

  const handleUpdate = async (updatedFlashcard) => {
    const updated = await updateFlashcard(
      updatedFlashcard._id,
      updatedFlashcard
    );
    setFlashcards(
      flashcards.map((fc) => (fc._id === updated._id ? updated : fc))
    );
    setFilteredSubjects(
      filteredSubjects.map((fc) => (fc._id === updated._id ? updated : fc))
    );
  };

  const handleDelete = async (id) => {
    await deleteFlashcard(id);
    setFlashcards(flashcards.filter((fc) => fc._id !== id));
    setFilteredSubjects(filteredSubjects.filter((fc) => fc._id !== id));
  };

  const handleCreate = async (newFlashcard) => {
    const created = await createFlashcard(newFlashcard);
    setFlashcards([...flashcards, created]);
    setFilteredSubjects([...filteredSubjects, created]);
    setShowCreateModal(false);
  };

  const handleSearch = (query) => {
    if (query === "") {
      // If query is empty, show all flashcards
      setFilteredSubjects(flashcards);
    } else {
      // Filter flashcards based on search query
      const filtered = flashcards.filter((flashcard) =>
        flashcard.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredSubjects(filtered);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col>
          <SearchBar onSearch={handleSearch} />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col className="text-center">
          <Button variant="success" onClick={() => setShowCreateModal(true)}>
            Create New Flashcard
          </Button>
        </Col>
      </Row>
      <Row>
        {filteredSubjects.map((flashcard) => (
          <Col key={flashcard._id} sm={12} md={4}>
            <FlashCard
              flashcard={flashcard}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          </Col>
        ))}
      </Row>
      <CreateModal
        show={showCreateModal}
        handleClose={() => setShowCreateModal(false)}
        handleCreate={handleCreate}
      />
    </Container>
  );
};

export default FlashCards;
