import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial);

  // Get all Notes
  const getNotes = async () => {
    // TODO API Call
    const response = await fetch(
      `${host}/api/notes/fetchallnotes`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNmE4NDg3NDBhYzFiNjM1ZWYxOTBmMjA3In0sImlhdCI6MTc4NzA3MDI3Mn0.pyizXjbd-gROLq30jkUFISDOu4MHC_-VcRim6lNtg78",
        },
      },
    );
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  // Add a Note
  const addNote = async (title, description, tag) => {
    // TODO API Call
    const response = await fetch(
      `${host}/api/notes/addnote`,
      {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNmE4NDg3NDBhYzFiNjM1ZWYxOTBmMjA3In0sImlhdCI6MTc4NzA3MDI3Mn0.pyizXjbd-gROLq30jkUFISDOu4MHC_-VcRim6lNtg78",
        },
        body: JSON.stringify(title, description, tag),
      },
    );

    const note = {
      _id: "6a8b14dba00debec09e5f2bb8",
      user: "6a848740ac1b635ef190f207",
      title: title,
      description: description,
      tag: tag,
      date: "2026-08-23T15:42:19.359Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  // Delete a Note
  const deleteNote = (id) => {
    // TODO API Call
    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(
      `${host}/api/notes/updatenote/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNmE4NDg3NDBhYzFiNjM1ZWYxOTBmMjA3In0sImlhdCI6MTc4NzA3MDI3Mn0.pyizXjbd-gROLq30jkUFISDOu4MHC_-VcRim6lNtg78",
        },
        body: JSON.stringify(title, description, tag),
      },
    );
    const json = response.json();

    // Logic to edit client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
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
