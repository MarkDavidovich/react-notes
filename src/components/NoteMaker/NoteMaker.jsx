import { useState } from "react";
import style from "./NoteMaker.module.css";

const NoteMaker = ({ onAddNote }) => {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");

  return (
    <form className={style.container}>
      <input
        type="text"
        id={style.title}
        placeholder="Title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />

      <textarea
        id={style.textarea}
        placeholder="Your note..."
        onChange={(e) => {
          setText(e.target.value);
        }}
      />

      <button className={style.btn} type="button" onClick={() => onAddNote(title, text)}>
        Add
      </button>
    </form>
  );
};

export default NoteMaker;
