import React from "react";
// import DeleteIcon from "./DeleteIcon";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  const now = new Date();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <p className="date">
        {months[now.getMonth()]} {now.getDate()}, {now.toLocaleTimeString()}
      </p>
      <button onClick={() => props.delete(props.id)}>
        <DeleteIcon />
      </button>
    </div>
  );
}
export default Note;
