import style from "./Note.module.css";

const Note = ({ id, title, text, dateCreated, dateEdited, onRemoveNote, onClickNote }) => {
  return (
    <div
      className={style.container}
      onClick={() => {
        onClickNote({ id, title, text, dateCreated });
      }}
    >
      <span className={style.header}>
        <p className={style.date}>Created: {dateCreated}</p>

        <button
          className={style.btn}
          onClick={(e) => {
            e.stopPropagation();
            onRemoveNote(id);
          }}
        >
          ✖
        </button>
      </span>
      {title.length > 0 ? <h1 className={style.title}>{title}</h1> : ""}
      <p className={style.text}>{text}</p>
      {dateEdited && <p className={style.edited}>Edited: {dateEdited}</p>}
    </div>
  );
};

export default Note;
