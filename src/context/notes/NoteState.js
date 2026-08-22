import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const s1 = {
    name: "Anmol",
    class: "5a",
  };
  const [state, setState] = useState(s1);
  const update = () => {
    setTimeout(() => {
      setState({
        name: "Nisha",
        class: "10a",
      });
    }, 1000);
  };

  return (
    <noteContext.Provider value={{state, update}}>{props.children}</noteContext.Provider>
  );
};

export default NoteState;
