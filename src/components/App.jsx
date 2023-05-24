import React, { useState } from "react";
import Header from "./Header";
import InputField from "./InputField";
import Note from "./Note";
import Footer from "./Footer";



function App() {
  const [items, setItems] = useState([]);

  function addItem(note) {
    setItems((prevNotes) => [...prevNotes, note]);
  }

  function deleteNote(id) {
    setItems((prevNotes) => prevNotes.filter((_, index) => index !== id));
  }

  return (
    <div>
      <Header />
      <InputField onAdd={addItem} />
      <Footer />

      {items.map((noteItem, index) => (
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      ))}
    </div>
  );
}

export default App;

