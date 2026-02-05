import style from "./Note.module.css";

const Note = ({ id, text, dateCreated, onRemoveNote }) => {
  return (
    <div className={style.container}>
      <span className={style.header}>
        <p className={style.date}>{dateCreated}</p>
        <button
          className={style.btn}
          onClick={() => {
            onRemoveNote(id);
          }}
        >
          ✖
        </button>
      </span>
      <p className={style.text}>{text}</p>
    </div>
  );
};

export default Note;
