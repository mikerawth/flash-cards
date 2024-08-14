import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchBar from "../components/SearchBar";
import SubjectCard from "../components/SubjectCard";

// Sample data
const subjects = [
  { id: 1, title: "Subject 1", content: "Lorem Ipsum..." },
  { id: 2, title: "Subject 2", content: "Lorem Ipsum..." },
  { id: 3, title: "Subject 3", content: "Lorem Ipsum..." },
  { id: 4, title: "Subject 4", content: "Lorem Ipsum..." },
  { id: 5, title: "Subject 5", content: "Lorem Ipsum..." },
  { id: 6, title: "Subject 6", content: "Lorem Ipsum..." },
  // Add more subjects as needed
];

// Function to split array into chunks of size n
const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

// Function to print Rows and Cols
const printRowsAndCols = (filteredSubjects) => {
  const rows = chunkArray(filteredSubjects, 3); // Split subjects into rows of 3
  return rows.map((rowSubjects, rowIndex) => (
    <Row key={rowIndex}>
      {rowSubjects.map((subject) => (
        <Col key={subject.id} sm={12} md={4}>
          <SubjectCard title={subject.title} content={subject.content} />
        </Col>
      ))}
    </Row>
  ));
};

const FlashCards = () => {
  const [filteredSubjects, setFilteredSubjects] = useState(subjects);

  const handleSearch = (query) => {
    const filtered = subjects.filter((subject) =>
      subject.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredSubjects(filtered);
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
