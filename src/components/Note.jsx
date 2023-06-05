import React from "react";

function Note({ id, title, content, timestamp, onDelete }) {
  const formattedTimestamp = new Date(timestamp).toLocaleString();

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="note bg-success text-white p-3 rounded shadow">
      <h1 className="text-dark mb-3">{title}</h1>
      <p className="text-white mb-3">{content}</p>
      <p className="text-white">
        Saved on: {formattedTimestamp}
      </p>
      <button onClick={handleDelete} className="btn">
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
}

export default Note;
