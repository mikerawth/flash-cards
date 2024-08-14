import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api"; // Update if deployed or use environment variable

export const getFlashcards = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/flashcards`);
    return response.data;
  } catch (error) {
    console.error("Error fetching flashcards:", error);
    throw error;
  }
};

export const createFlashcard = async (flashcard) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/flashcards`, flashcard);
    return response.data;
  } catch (error) {
    console.error("Error creating flashcard:", error);
    throw error;
  }
};
