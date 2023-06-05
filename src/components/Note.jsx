import React from "react";

<<<<<<< HEAD
function Note({ id, title, content, timestamp, onDelete }) {
  const formattedTimestamp = new Date(timestamp).toLocaleString();
=======
function Note({ id, title, content,timestamp, onDelete }) {
>>>>>>> experimental-2

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
      <p className="text-white">
<<<<<<< HEAD
        Saved on: {formattedTimestamp}
=======
        Saved on: {formattedTimeStamp}
>>>>>>> experimental-2
      </p>
      <button onClick={handleDelete} className="btn">
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
}

export default Note;
