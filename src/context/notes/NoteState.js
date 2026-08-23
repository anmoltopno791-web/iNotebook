import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "6a8b14dba00debec095f2bb8",
      user: "6a848740ac1b635ef190f207",
      title: "New note",
      description: "Please access the playlist",
      tag: "YouTube",
      date: "2026-08-23T15:42:19.359Z",
      __v: 0,
    },
    {
      _id: "6a8b150ea00debec095f2bb9",
      user: "6a848740ac1b635ef190f207",
      title: "Github",
      description: "Please starting coding",
      tag: "Coding",
      date: "2026-08-23T15:43:10.465Z",
      __v: 0,
    },
    {
      _id: "6a8b14dba00debec095f2bb8",
      user: "6a848740ac1b635ef190f207",
      title: "New note",
      description: "Please access the playlist",
      tag: "YouTube",
      date: "2026-08-23T15:42:19.359Z",
      __v: 0,
    },
    {
      _id: "6a8b150ea00debec095f2bb9",
      user: "6a848740ac1b635ef190f207",
      title: "Github",
      description: "Please starting coding",
      tag: "Coding",
      date: "2026-08-23T15:43:10.465Z",
      __v: 0,
    },
    {
      _id: "6a8b14dba00debec095f2bb8",
      user: "6a848740ac1b635ef190f207",
      title: "New note",
      description: "Please access the playlist",
      tag: "YouTube",
      date: "2026-08-23T15:42:19.359Z",
      __v: 0,
    },
    {
      _id: "6a8b150ea00debec095f2bb9",
      user: "6a848740ac1b635ef190f207",
      title: "Github",
      description: "Please starting coding",
      tag: "Coding",
      date: "2026-08-23T15:43:10.465Z",
      __v: 0,
    },
    {
      _id: "6a8b14dba00debec095f2bb8",
      user: "6a848740ac1b635ef190f207",
      title: "New note",
      description: "Please access the playlist",
      tag: "YouTube",
      date: "2026-08-23T15:42:19.359Z",
      __v: 0,
    },
    {
      _id: "6a8b150ea00debec095f2bb9",
      user: "6a848740ac1b635ef190f207",
      title: "Github",
      description: "Please starting coding",
      tag: "Coding",
      date: "2026-08-23T15:43:10.465Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);

  return (
    <noteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
