import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

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
  const addNote = (noteItem) => {
    setNotes([...notes, noteItem]);
  };
  const deleteNote = (id) => {
    console.log("Note deletion initiated...");
    setNotes(notes.filter((_, i) => i !== id));
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
