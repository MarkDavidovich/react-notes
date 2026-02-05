import style from "./Note.module.css";

const Note = ({ id, title, text, dateCreated, onRemoveNote }) => {
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
      {title.length > 0 ? <h1 className={style.title}>{title}</h1> : ""}
      <p className={style.text}>{text}</p>
    </div>
  );
};

export default Note;
