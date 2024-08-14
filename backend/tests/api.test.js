// backend/tests/api.test.js
const request = require("supertest");
const app = require("../server"); // Update path if necessary

describe("GET /api/test", () => {
  it("should return API route working", async () => {
    const res = await request(app).get("/api/test");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("API route working");
  });
});

describe("GET /api/flashcards", () => {
  it("should return an array of flashcards", async () => {
    const res = await request(app).get("/api/flashcards");
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

describe("POST /api/flashcards", () => {
  it("should create a new flashcard", async () => {
    const newFlashcard = {
      title: "New Flashcard",
      content: "Content for the new flashcard",
    };
    const res = await request(app).post("/api/flashcards").send(newFlashcard);
    expect(res.statusCode).toEqual(201);
    expect(res.body.title).toEqual(newFlashcard.title);
    expect(res.body.content).toEqual(newFlashcard.content);
  });
});
