const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000; // Set a default port if PORT environment variable is not defined
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB Atlas:", error);
  });

// Create a schema for notes
const noteSchema = new mongoose.Schema({
  title: String,
  content: String,
  timestamp: { type: Date, default: Date.now },
});

// Create a model based on the schema
const Note = mongoose.model("Note", noteSchema);

// API endpoints

// Get all notes
app.get("/api/notes", async (req, res) => {
  try {
    const foundNotes = await Note.find({});
    res.json(foundNotes);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Create a new note
app.post("/api/notes", async (req, res) => {
  const newNote = new Note({
    title: req.body.title,
    content: req.body.content,
  });

  try {
    await newNote.save();
    res.send("Note saved successfully.");
  } catch (err) {
    res.status(500).send(err);
  }
});

// Delete a note
app.delete("/api/notes/:id", async (req, res) => {
  const noteId = req.params.id;

  try {
    await Note.findByIdAndRemove(noteId);
    res.send("Note deleted successfully.");
  } catch (err) {
    res.status(500).send(err);
  }
});

// Handle requests to the root URL
app.get("/", (req, res) => {
  res.send("Welcome to the Notes API.");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
