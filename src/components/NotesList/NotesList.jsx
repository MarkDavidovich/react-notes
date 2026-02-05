import style from "./NotesList.module.css";
import Note from "../Note/Note";

const NotesList = ({ notes, onRemoveNote, onClickNote }) => {
  return (
    <div className={style.container}>
      {notes.map((n) => (
        <Note key={n.id} id={n.id} title={n.title} text={n.text} dateCreated={n.dateCreated} onRemoveNote={onRemoveNote} onClickNote={onClickNote} />
      ))}
    </div>
  );
};

export default NotesList;
