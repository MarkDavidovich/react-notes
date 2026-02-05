import { useState } from "react";
import style from "./Modal.module.css";

const Modal = ({ onClose, onEditNote, id, dateCreated, title, text }) => {
  const [newText, setNewText] = useState(text);
  const [newTitle, setNewTitle] = useState(title);

  return (
    <div className={style.backdrop} onClick={onClose}>
      <div className={style.modal} onClick={(e) => e.stopPropagation()}>
        <span className={style.header}>
          <p className={style.date}> {dateCreated}</p>
        </span>
        <input type="text" id={style.title} value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
        <textarea id={style.text} value={newText} onChange={(e) => setNewText(e.target.value)}></textarea>
        <button
          className={style.btn}
          onClick={() => {
            if (newTitle !== title || newText !== text) {
              onEditNote(id, newText, newTitle);
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
