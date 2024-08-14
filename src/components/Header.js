// src/components/Header.js
import React from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  let title = "";
  let description = "";

  switch (location.pathname) {
    case "/":
      title = "Welcome to Mike's Company";
      description = "This is the home page.";
      break;
    case "/flashcards":
      title = "Flash Cards";
      description = "Please select a subject you are interested in learning.";
      break;
    default:
      title = "Page Not Found";
      description = "This page does not exist.";
  }

  return (
    <header className="text-center mb-3">
      <h1>{title}</h1>
      <p>{description}</p>
    </header>
  );
};

export default Header;
