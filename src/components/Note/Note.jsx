import style from "./Note.module.css";

const Note = ({ id, text, dateCreated }) => {
  return (
    <div>
      <p>{dateCreated}</p>
      <p>{text}</p>
    </div>
  );
};

export default Note;
