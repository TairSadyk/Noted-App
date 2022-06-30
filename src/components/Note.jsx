import React from "react";
import Icon from "./Icon";
function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button>
        <Icon />
      </button>
    </div>
  );
}
export default Note;
