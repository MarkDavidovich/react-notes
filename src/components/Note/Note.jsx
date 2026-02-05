import style from "./Note.module.css";

const Note = ({ id, text, dateCreated }) => {
  return (
    <div className={style.container}>
      <span className={style.header}>
        <p className={style.date}>{dateCreated}</p>
        <button className={style.btn}>✖</button>
      </span>
      <p className={style.text}>{text}</p>
    </div>
  );
};

export default Note;
