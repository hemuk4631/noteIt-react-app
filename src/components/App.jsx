import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import InputField from "./InputField";
import Note from "./Note";
import Footer from "./Footer";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = () => {
    axios
      .get("/api/notes")
      .then((response) => {
        setNotes(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const addNote = (note) => {
    axios
      .post("/api/notes", note)
      .then((response) => {
        console.log(response.data);
        setNotes((prevNotes) => [...prevNotes, response.data]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const deleteNote = (id) => {
    axios
      .delete(`/api/notes/${id}`)
      .then((response) => {
        console.log(response.data);
        setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Header />
      <InputField onAdd={addNote} />
      <Footer />

      {notes.map((note) => (
        <Note
          key={note._id}
          id={note._id}
          title={note.title}
          content={note.content}
          timestamp={note.timestamp}
          onDelete={deleteNote}
        />
      ))}
    </div>
  );
}

export default App;
