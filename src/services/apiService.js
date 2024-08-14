import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api"; // Update if deployed or use environment variable

// Get all flashcards
export const getFlashcards = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/flashcards`);
    return response.data;
  } catch (error) {
    console.error("Error fetching flashcards:", error);
    throw error;
  }
};

// Create a new flashcard
export const createFlashcard = async (flashcard) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/flashcards`, flashcard);
    return response.data;
  } catch (error) {
    console.error("Error creating flashcard:", error);
    throw error;
  }
};

// Get a single flashcard by ID
export const getFlashcardById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/flashcards/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching flashcard with ID ${id}:`, error);
    throw error;
  }
};

// Update a flashcard by ID
export const updateFlashcard = async (id, updatedFlashcard) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/flashcards/${id}`,
      updatedFlashcard
    );
    return response.data;
  } catch (error) {
    console.error(`Error updating flashcard with ID ${id}:`, error);
    throw error;
  }
};

// Delete a flashcard by ID
export const deleteFlashcard = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/flashcards/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting flashcard with ID ${id}:`, error);
    throw error;
  }
};
