import React from "react";

<<<<<<< HEAD
function Note({ id, title, content, timestamp, onDelete }) {
  const formattedTimestamp = new Date(timestamp).toLocaleString();
=======
function Note({ id, title, content,timestamp, onDelete }) {

  //adding timestamp to note component.
  const formattedTimeStamp = new Date(timestamp).toLocaleString();
  //delete handle.
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="note bg-success text-white p-3 rounded shadow">
      <h1 className="text-dark mb-3">{title}</h1>
      <p className="text-white mb-3">{content}</p>
      <p className="timestamp text-white">
        Saved on: {formattedTimeStamp}
      </p>
      <button onClick={handleDelete} className="btn">
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
}

export default Note;
