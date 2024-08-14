// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FlashCards from "./pages/FlashCards";
import NavBar from "./components/NavBar";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="App m-3">
        <NavBar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flashcards" element={<FlashCards />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
