import React, { useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery); // Automatically search as input changes
  };

  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
        aria-label="Search"
      />
    </InputGroup>
  );
};

export default SearchBar;
