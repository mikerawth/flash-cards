import "./App.css";
import SubjectCard from "./components/SubjectCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Sample data
const subjects = [
  { id: 1, title: "Subject 1" },
  { id: 2, title: "Subject 2" },
  { id: 3, title: "Subject 3" },
  { id: 4, title: "Subject 4" },
  { id: 5, title: "Subject 5" },
  { id: 6, title: "Subject 6" },
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

const printRows = () => {
  const rows = chunkArray(subjects, 3); // Split subjects into rows of 3
  return rows.map((rowSubjects, rowIndex) => (
    <Row key={rowIndex}>
      {rowSubjects.map((subject) => (
        <Col key={subject.id} sm={12} md={4}>
          <SubjectCard title={subject.title} />
        </Col>
      ))}
    </Row>
  ));
};

function App() {
  return (
    <div className="App">
      <Container>{printRows()}</Container>
    </div>
  );
}

export default App;
