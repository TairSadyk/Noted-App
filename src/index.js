import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
const saveNote = (notes) => {
  localStorage.setItem("notes", JSON.stringify(notes));
};
console.log(localStorage.getItem("notes"));
window.addEventListener("load", saveNote);
ReactDom.render(
  <App
    onLoad={saveNote}
    // savedNotes={JSON.parse(localStorage.getItem("notes"))}
  />,
  document.querySelector("#root")
);
