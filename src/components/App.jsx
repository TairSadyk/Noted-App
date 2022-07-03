import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import { useEffect } from "react";

//Implementing notes functionality using objects where title is a key and content is a value
// function App() {
//   const [note, setNote] = useState({});
//   const addNote = (noteObj) => {
//     setNote({ ...note, ...noteObj });
//   };
//   const deleteNote = (key) => {
//     console.log("Note deletion initiated...");
//     // delete note[key];
//     setNote(Object.keys(note).filter((k) => k !== key));
//     console.log(note);
//   };
//   return (
//     <div>
//       <Header />
//       <CreateArea addNote={addNote} />
//       {Object.keys(note).map((key, i) => (
//         <Note
//           delete={deleteNote}
//           id={i}
//           key={i}
//           title={key}
//           content={note[key]}
//         />
//       ))}
//       <Footer />
//     </div>
//   );
// }

function App() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const existingNotes = localStorage.getItem("notes");
    setNotes(existingNotes ? JSON.parse(existingNotes) : []);
  }, []);
  const addNote = (noteItem) => {
    setNotes([...notes, noteItem]);
    localStorage.setItem("notes", JSON.stringify([...notes, noteItem]));
  };
  const deleteNote = (id) => {
    setNotes(notes.filter((_, i) => i !== id));
    localStorage.setItem(
      "notes",
      JSON.stringify(notes.filter((_, i) => i !== id))
    );
  };

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((note, i) => (
        <Note
          delete={deleteNote}
          key={i}
          id={i}
          title={note.title}
          content={note.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
