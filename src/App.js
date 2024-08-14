import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FlashCards from "./pages/FlashCards";
import NavBar from "./components/NavBar"; // Optional: If you have a navigation bar

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar /> {/* Optional: Add a navigation bar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flashcards" element={<FlashCards />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
