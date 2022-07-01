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
  const handleChange = (e) => {
    const { value, name } = e.target;
    setNote({ ...note, [name]: value });
  };

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
      <input
        onChange={handleChange}
        value={note.title}
        name="title"
        placeholder="Title"
      />
      <textarea
        onChange={handleChange}
        value={note.content}
        name="content"
        rows="3"
        placeholder="take a a note..."
      />
      <Zoom in={true}>
        <Fab className="btn" type="submit">
          <AddIcon />
        </Fab>
      </Zoom>
    </form>
  );
}
export default CreateArea;
