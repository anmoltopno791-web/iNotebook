import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  const getAuthHeaders = () => ({
    "Content-Type": "application/json",
    "auth-token": localStorage.getItem("token"),
  });

  // Get all Notes
  const getNotes = async () => {
    // TODO API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: getAuthHeaders(),
    });
    const json = await response.json();
    setNotes(json);
  };

  // Add a Note
  const addNote = async (title, description, tag) => {
    // TODO API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json();
    setNotes((currentNotes) => currentNotes.concat(note));
  };
  // Delete a Note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    });
    if (!response.ok) {
      const message = await response.text();
      throw new Error(message || "Unable to delete note");
    }

    setNotes((currentNotes) => currentNotes.filter((note) => note._id !== id));
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: getAuthHeaders(),
      body: JSON.stringify({ title, description, tag }),
    });
    if (!response.ok) {
      const message = await response.text();
      throw new Error(message || "Unable to update note");
    }

    const { note: updatedNote } = await response.json();
    setNotes((currentNotes) =>
      currentNotes.map((note) => (note._id === id ? updatedNote : note)),
    );
  };

  return (
    <noteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
