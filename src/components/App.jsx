import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App() {
  const [note, setNote] = useState({});
  const addNote = (noteObj) => {
    setNote({ ...note, ...noteObj });
  };
  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {Object.keys(note).map((key, i) => (
        <Note key={i} title={key} content={note[key]} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
