import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "6a8b14dba00debec6095f2bb8",
      user: "6a848740ac1b635ef190f207",
      title: "New note",
      description: "Please access the playlist",
      tag: "YouTube",
      date: "2026-08-23T15:42:19.359Z",
      __v: 0,
    },
    {
      _id: "6a8b150ea00debeic095f2bb9",
      user: "6a848740ac1b635ef190f207",
      title: "Github",
      description: "Please starting coding",
      tag: "Coding",
      date: "2026-08-23T15:43:10.465Z",
      __v: 0,
    },
    {
      _id: "6a8b14dba00deb5ec095f2bb8",
      user: "6a848740ac1b635ef190f207",
      title: "New note",
      description: "Please access the playlist",
      tag: "YouTube",
      date: "2026-08-23T15:42:19.359Z",
      __v: 0,
    },
    {
      _id: "6a8b150ea00deb8ec095f2bb9",
      user: "6a848740ac1b635ef190f207",
      title: "Github",
      description: "Please starting coding",
      tag: "Coding",
      date: "2026-08-23T15:43:10.465Z",
      __v: 0,
    },
    {
      _id: "6a8b14dba00deb6ec095f2bb8",
      user: "6a848740ac1b635ef190f207",
      title: "New note",
      description: "Please access the playlist",
      tag: "YouTube",
      date: "2026-08-23T15:42:19.359Z",
      __v: 0,
    },
    {
      _id: "6a8b150ea00deb2ec095f2bb9",
      user: "6a848740ac1b635ef190f207",
      title: "Github",
      description: "Please starting coding",
      tag: "Coding",
      date: "2026-08-23T15:43:10.465Z",
      __v: 0,
    },
    {
      _id: "6a8b14dba00debec0495f2bb8",
      user: "6a848740ac1b635ef190f207",
      title: "New note",
      description: "Please access the playlist",
      tag: "YouTube",
      date: "2026-08-23T15:42:19.359Z",
      __v: 0,
    },
    {
      _id: "6a8b150ea00debec095fw2bb9",
      user: "6a848740ac1b635ef190f207",
      title: "Github",
      description: "Please starting coding",
      tag: "Coding",
      date: "2026-08-23T15:43:10.465Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);

  // Add a Note
  const addNote = (title, description, tag) => {
    // TODO API Call
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
  const deleteNote = () => {

  }

  // Edit a Note
  const editNote = () => {

  }

  return (
    <noteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote  }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
