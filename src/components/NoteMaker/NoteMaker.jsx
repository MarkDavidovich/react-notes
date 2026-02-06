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

  const selectCategory = (newColor, newCategory) => {
    setColor(newColor);
    setCategory(newCategory);
  };

  return (
    <form className={style.container} style={{ backgroundColor: color }}>
      <input
        type="text"
        id={style.title}
        style={{ backgroundColor: color }}
        placeholder="Title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
      />

      <textarea
        id={style.textarea}
        style={{ backgroundColor: color }}
        placeholder="Your note..."
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
      />

      <CategoryPicker onSelectCategory={selectCategory} />

      <button
        className={style.btn}
        type="button"
        onClick={() => {
          if (text.trim() === "" && title.trim() === "") {
            return;
          }
          onAddNote(title, text, color, category);
          setColor("#ffffff");
          clearInput();
        }}
      >
        Add
      </button>
    </form>
  );
};

export default NoteMaker;
