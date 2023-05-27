import React from "react";

function Note({ id, title, content, onDelete }) {
  const occasion = {
    time: new Date().toLocaleTimeString(),
    date: new Date().toLocaleDateString(),
  };
  const { time, date } = occasion;

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="note bg-success text-white p-3 rounded shadow">
      <h1 className="text-dark mb-3">{title}</h1>
      <p className="text-white mb-3">{content}</p>
      <p className="text-white">
        {date}, {time}
      </p>
      <button onClick={handleDelete} className="btn">
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
}

export default Note;
