const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT; //localhost
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
  console.log("connected to mongoDB atlas");

}).catch(()=>{
  console.log("not connected to mongoDB atlas");
});

// Create a schema for notes
const noteSchema = new mongoose.Schema({
  title: String,
  content: String,
  timestamp: { type: Date, default: Date.now }
});

// Create a model based on the schema
const Note = mongoose.model("Note", noteSchema);

app.use(express.json());

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

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
