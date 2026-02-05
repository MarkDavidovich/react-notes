import { useState } from "react";
import style from "./NoteMaker.module.css";

const NoteMaker = ({ onAddNote }) => {
  const [text, setText] = useState("");

  return (
    <form className={style.form}>
      <textarea
        id="text-area"
        placeholder="Your note..."
        onChange={(e) => {
          setText(e.target.value);
        }}
      />

      <button className={style.btn} type="button" onClick={() => onAddNote(text)}>
        Add
      </button>
    </form>
  );
};

export default NoteMaker;
