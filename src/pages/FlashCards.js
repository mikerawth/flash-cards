import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchBar from "../components/SearchBar";
import SubjectCard from "../components/SubjectCard";
import { getFlashcards } from "../services/apiService";

const FlashCards = () => {
  const [flashcards, setFlashcards] = useState([]); // Original data
  const [filteredSubjects, setFilteredSubjects] = useState([]); // Data to display

  const handleSearch = (query) => {
    const filtered = flashcards.filter((subject) =>
      subject.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredSubjects(filtered);
  };

  useEffect(() => {
    const fetchFlashcards = async () => {
      try {
        const flashcards = await getFlashcards();
        setFlashcards(flashcards); // Store original data
        setFilteredSubjects(flashcards); // Display all flashcards by default
      } catch (error) {
        console.error("Error fetching flashcards:", error);
      }
    };

    fetchFlashcards();
  }, []);

  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const printRowsAndCols = (subjects) => {
    const rows = chunkArray(subjects, 3); // Split subjects into rows of 3
    return rows.map((rowSubjects, rowIndex) => (
      <Row key={rowIndex}>
        {rowSubjects.map((subject) => (
          <Col key={subject._id} sm={12} md={4}>
            <SubjectCard title={subject.title} content={subject.content} />
          </Col>
        ))}
      </Row>
    ));
  };

  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col>
            <SearchBar onSearch={handleSearch} />
          </Col>
        </Row>
        {printRowsAndCols(filteredSubjects)}
      </Container>
    </>
  );
};

export default FlashCards;
