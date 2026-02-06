import { useState } from "react";
import style from "./Modal.module.css";
import CategoryPicker from "../CategoryPicker/CategoryPicker";
import moment from "moment";

const Modal = ({ onClose, onEditNote, id, dateCreated, title, text, dateEdited, color, category }) => {
  const [newText, setNewText] = useState(text);
  const [newTitle, setNewTitle] = useState(title);
  const [newColor, setNewColor] = useState(color);
  const [newCategory, setNewCategory] = useState(category);

  const selectNewCategory = (newColor, newCategory) => {
    setNewColor(newColor);
    setNewCategory(newCategory);
  };

  return (
    <div className={style.backdrop} onClick={onClose}>
      <div className={style.modal} style={{ backgroundColor: newColor }} onClick={(e) => e.stopPropagation()}>
        <span className={style.header}>
          <p className={style.date}>Created: {dateCreated}</p>
          {dateEdited && <p className={style.edited}>Edited: {dateEdited}</p>}
        </span>
        <input type="text" id={style.title} style={{ backgroundColor: newColor }} value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
        <textarea id={style.text} style={{ backgroundColor: newColor }} value={newText} onChange={(e) => setNewText(e.target.value)}></textarea>
        <CategoryPicker onSelectCategory={selectNewCategory} />
        <button
          className={style.btn}
          onClick={() => {
            if (newText !== "" || newTitle !== "") {
              onEditNote(id, newText, newTitle, newColor, newCategory, moment().format("MMMM Do, h:mm A"));
              onClose();
            }
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};
export default Modal;
