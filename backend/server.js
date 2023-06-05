// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors"); 

// const app = express();
// const port = 5000;
// app.use(cors());
// // Connect to MongoDB
// mongoose.connect("mongodb://127.0.0.1:27017/notesDB", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Create a schema for notes
// const noteSchema = new mongoose.Schema({
//   title: String,
//   content: String,
// });

// // Create a model based on the schema
// const Note = mongoose.model("Note", noteSchema);

// app.use(express.json());

// // API endpoints

// // Get all notes
// app.get("/api/notes", async (req, res) => {
//   try {
//     const foundNotes = await Note.find({});
//     res.json(foundNotes);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// // Create a new note
// app.post("/api/notes", async (req, res) => {
//   const newNote = new Note({
//     title: req.body.title,
//     content: req.body.content,
//   });

//   try {
//     await newNote.save();
//     res.send("Note saved successfully.");
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// // Delete a note
// app.delete("/api/notes/:id", async (req, res) => {
//   const noteId = req.params.id;

//   try {
//     await Note.findByIdAndRemove(noteId);
//     res.send("Note deleted successfully.");
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}.`);
// });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 5000;
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/notesDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a schema for notes
const noteSchema = new mongoose.Schema({
  title: String,
  content: String,
  timestamp: { type: Date, default: Date.now },
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
