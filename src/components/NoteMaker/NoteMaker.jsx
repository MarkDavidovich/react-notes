import { useState } from "react";
import style from "./NoteMaker.module.css";

const NoteMaker = () => {
  //textarea for text input, below it a button to process the text and create a note cmp in a note container
  const [noteText, setNoteText] = useState("");

  return (
    <form className={style.form}>
      <textarea
        id="text-area"
        placeholder="Your note..."
        onChange={(e) => {
          setNoteText(e.target.value);
        }}
      />
      <button className={style.btn} type="button" onClick={() => {}}>
        Add
      </button>
    </form>
  );
};

export default NoteMaker;
