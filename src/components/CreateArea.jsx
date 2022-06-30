import React, { useState } from "react";
function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const updateTitle = (e) => setTitle(e.target.value);
  const updateContent = (e) => setContent(e.target.value);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.addNote({ [title]: content });
        setTitle("");
        setContent("");
      }}
    >
      <input
        onChange={updateTitle}
        value={title}
        name="title"
        placeholder="Title"
      />
      <textarea
        onChange={updateContent}
        value={content}
        name="content"
        rows="3"
        placeholder="take a a note..."
      />
      <button type="submit">Add</button>
    </form>
  );
}
export default CreateArea;
