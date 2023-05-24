import React, { useState } from "react";

function Inputfield(props) {
  const [notes, setNotes] = useState({
    title: "",
    content: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNotes((prevNotes) => ({
      ...prevNotes,
      [name]: value
    }));
  };

  const addItem = (event) => {
    event.preventDefault();
    props.onAdd(notes);
    setNotes({
      title: "",
      content: ""
    });
  };

  return (
    <div className="wrapper">
      <form className="inputArea bg-white p-3 rounded shadow">
        <div className="form-group">
          <input
            onChange={handleChange}
            value={notes.title}
            name="title"
            className="form-control"
            placeholder="Title"
          ></input>
        </div>
        <div className="form-group">
          <textarea
            onChange={handleChange}
            value={notes.content}
            name="content"
            className="form-control"
            placeholder="Write Note"
          ></textarea>
        </div>
        <button onClick={addItem} className="btn">
        <i className="fa-solid fa-plus"></i>
        </button>
      </form>
    </div>
  );
}

export default Inputfield;
