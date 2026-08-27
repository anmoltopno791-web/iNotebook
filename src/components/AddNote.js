import React, { useState, useContext } from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "default",
  });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <section className="composer-panel">
      <div className="section-kicker">Quick capture</div>
      <h2>What&apos;s on your mind?</h2>
      <p className="muted-copy">
        Turn a thought into something you can return to.
      </p>
      <form className="note-form">
        <div className="field-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Give your note a name"
            onChange={onChange}
            required
          />
        </div>
        <div className="field-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="Write the details here..."
            onChange={onChange}
            required
          />
        </div>
        <div className="form-row">
          <div className="field-group">
            <label htmlFor="tag">Tag</label>
            <input
              type="text"
              id="tag"
              name="tag"
              placeholder="e.g. planning"
              onChange={onChange}
            />
          </div>
          <button
            type="submit"
            className="primary-button"
            onClick={handleClick}
          >
            <span>+</span> Add note
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddNote;
