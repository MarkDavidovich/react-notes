import { useState } from "react";
import style from "./NoteMaker.module.css";
import CategoryPicker from "../CategoryPicker/CategoryPicker";

const NoteMaker = ({ onAddNote }) => {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("#ffffff");

  const clearInput = () => {
    setText("");
    setTitle("");
  };

  const onSelectCategory = (newColor, newCategory) => {
    setColor(newColor);
    setCategory(newCategory);
  };

  //give the note a color property which changes it's background color

  return (
    <form className={style.container}>
      <input
        type="text"
        id={style.title}
        placeholder="Title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
      />

      <textarea
        id={style.textarea}
        placeholder="Your note..."
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
      />

      <CategoryPicker />

      <button
        className={style.btn}
        type="button"
        onClick={() => {
          if (text.trim() === "" && title.trim() === "") {
            return;
          }
          onAddNote(title, text, color, category);
          clearInput();
        }}
      >
        Add
      </button>
    </form>
  );
};

export default NoteMaker;
