import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");
  // const updateTitle = (e) => setTitle(e.target.value);
  // const updateContent = (e) => setContent(e.target.value);
  const [note, setNote] = useState({ title: "", content: "" });
  const [inputInitiated, setInputInitiated] = useState(false);
  const handleChange = (e) => {
    const { value, name } = e.target;
    setNote({ ...note, [name]: value });
  };
  const activateNote = () => setInputInitiated(true);

  return (
    //Implementing notes functionality using objects where title is a key and content is a value
    // <form
    //   onSubmit={(e) => {
    //     e.preventDefault();
    //     props.addNote({ [title]: content });
    //     setTitle("");
    //     setContent("");
    //   }}
    // >
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.addNote(note);
        setNote({ title: "", content: "" });
      }}
    >
      {inputInitiated && (
        <input
          onChange={handleChange}
          value={note.title}
          name="title"
          placeholder="Title"
        />
      )}
      <textarea
        onClick={activateNote}
        onChange={handleChange}
        value={note.content}
        name="content"
        rows={inputInitiated ? "3" : "1"}
        placeholder="take a a note..."
      />
      <Zoom in={inputInitiated}>
        <Fab className="btn" type="submit">
          <AddIcon />
        </Fab>
      </Zoom>
    </form>
  );
}
export default CreateArea;
