import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // Get all Notes
  const getNotes = async () => {
    // TODO API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNmE4NDg3NDBhYzFiNjM1ZWYxOTBmMjA3In0sImlhdCI6MTc4NzA3MDI3Mn0.pyizXjbd-gROLq30jkUFISDOu4MHC_-VcRim6lNtg78",
      },
    });
    const json = await response.json();
    setNotes(json);
  };

  // Add a Note
  const addNote = async (title, description, tag) => {
    // TODO API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNmE4NDg3NDBhYzFiNjM1ZWYxOTBmMjA3In0sImlhdCI6MTc4NzA3MDI3Mn0.pyizXjbd-gROLq30jkUFISDOu4MHC_-VcRim6lNtg78",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json();
    setNotes((currentNotes) => currentNotes.concat(note));
  };
  // Delete a Note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNmE4NDg3NDBhYzFiNjM1ZWYxOTBmMjA3In0sImlhdCI6MTc4NzA3MDI3Mn0.pyizXjbd-gROLq30jkUFISDOu4MHC_-VcRim6lNtg78",
      },
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
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNmE4NDg3NDBhYzFiNjM1ZWYxOTBmMjA3In0sImlhdCI6MTc4NzA3MDI3Mn0.pyizXjbd-gROLq30jkUFISDOu4MHC_-VcRim6lNtg78",
      },
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
