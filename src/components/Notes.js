import React, { useContext, useEffect, useState } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./NoteItem";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";

const Notes = () => {
  const context = useContext(noteContext);
  const navigate = useNavigate();
  const { notes, getNotes, editNote } = context;
  const [currentNote, setCurrentNote] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [editError, setEditError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  const updateNote = (note) => {
    setCurrentNote({ ...note });
    setEditError("");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    if (isSaving) return;
    setIsModalOpen(false);
    setCurrentNote(null);
    setEditError("");
  };

  const handleChange = (event) => {
    setCurrentNote({
      ...currentNote,
      [event.target.name]: event.target.value,
    });
  };

  const handleSave = async (event) => {
    event.preventDefault();
    const title = currentNote.title.trim();
    const description = currentNote.description.trim();
    if (!title || !description) {
      setEditError("Title and description cannot be empty.");
      return;
    }
    setIsSaving(true);
    setEditError("");
    try {
      await editNote(
        currentNote._id,
        title,
        description,
        currentNote.tag.trim(),
      );
      setIsModalOpen(false);
      setCurrentNote(null);
    } catch (error) {
      setEditError(error.message || "Unable to save changes");
    } finally {
      setIsSaving(false);
    }
  };

  const filteredNotes = notes.filter((note) =>
    `${note.title} ${note.description} ${note.tag}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="workspace">
      <header className="workspace-header">
        <div>
          <div className="section-kicker">Personal workspace</div>
          <h1>
            Good ideas,
            <br />
            <em>kept close.</em>
          </h1>
          <p className="workspace-intro">
            A calm place for the thoughts worth keeping.
          </p>
        </div>
        <div className="workspace-stats">
          <strong>{notes.length.toString().padStart(2, "0")}</strong>
          <span>notes collected</span>
        </div>
      </header>
      <AddNote />
      <section className="notes-section">
        <div className="notes-toolbar">
          <div>
            <div className="section-kicker">Your collection</div>
            <h2>
              All notes <span>{filteredNotes.length}</span>
            </h2>
          </div>
          <label className="search-box" htmlFor="note-search">
            <span aria-hidden="true">/</span>
            <input
              id="note-search"
              type="search"
              placeholder="Search your notes"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </label>
        </div>
        {notes.length === 0 ? (
          <div className="empty-state">
            <span className="empty-icon">+</span>
            <h3>Your collection starts here</h3>
            <p>
              Add your first note above and give the idea somewhere to land.
            </p>
          </div>
        ) : filteredNotes.length === 0 ? (
          <div className="empty-state">
            <h3>No notes found</h3>
            <p>Try a different title, tag, or phrase.</p>
          </div>
        ) : (
          <div className="notes-grid">
            {filteredNotes.map((note) => (
              <Noteitem key={note._id} updateNote={updateNote} note={note} />
            ))}
          </div>
        )}
      </section>
      {isModalOpen && currentNote && (
        <div
          className="edit-modal show"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-modal="true"
          onMouseDown={(event) =>
            event.target === event.currentTarget && closeModal()
          }
        >
          <div className="edit-modal-dialog" role="document">
            <div className="edit-modal-content">
              <div className="edit-modal-header">
                <h2 id="exampleModalLabel">Edit Note</h2>
                <button
                  type="button"
                  className="modal-close"
                  aria-label="Close"
                  onClick={closeModal}
                >
                  <span aria-hidden="true">x</span>
                </button>
              </div>
              <form onSubmit={handleSave}>
                <div className="edit-modal-body">
                  {editError && (
                    <p className="form-error" role="alert">
                      {editError}
                    </p>
                  )}
                  <div className="field-group">
                    <label htmlFor="edit-title">Title</label>
                    <input
                      type="text"
                      id="edit-title"
                      name="title"
                      value={currentNote?.title || ""}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="field-group">
                    <label htmlFor="edit-description">Description</label>
                    <textarea
                      id="edit-description"
                      name="description"
                      value={currentNote?.description || ""}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="field-group">
                    <label htmlFor="edit-tag">Tag</label>
                    <input
                      type="text"
                      id="edit-tag"
                      name="tag"
                      value={currentNote?.tag || ""}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="edit-modal-footer">
                  <button
                    type="button"
                    className="secondary-button"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="primary-button"
                    disabled={isSaving}
                  >
                    {isSaving ? "Saving..." : "Save changes"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notes;
