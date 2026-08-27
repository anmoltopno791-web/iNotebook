import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <article className="note-card">
      <div className="note-card-top">
        <span className="note-tag">{note.tag || "General"}</span>
        <span className="note-dot" aria-hidden="true"></span>
      </div>
      <h3>{note.title}</h3>
      <p>{note.description}</p>
      <div className="note-card-footer">
        <span className="note-date">
          {note.date
            ? new Date(note.date).toLocaleDateString(undefined, {
                month: "short",
                day: "numeric",
              })
            : "New note"}
        </span>
        <div className="note-actions">
          <button
            type="button"
            className="icon-button danger"
            aria-label={`Delete ${note.title}`}
            onClick={() => deleteNote(note._id)}
          >
            Delete
          </button>
          <button
            type="button"
            className="icon-button"
            aria-label={`Edit ${note.title}`}
            title={`Edit ${note.title}`}
            onClick={() => updateNote(note)}
          >
            Edit
          </button>
        </div>
      </div>
    </article>
  );
};

export default NoteItem;
