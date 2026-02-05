import style from "./NotesList.module.css";
import Note from "../Note/Note";

const NotesList = ({ notes, onRemoveNote }) => {
  return (
    <div className={style.container}>
      {notes.map((n) => (
        <Note key={n.id} id={n.id} text={n.text} dateCreated={n.dateCreated} onRemoveNote={onRemoveNote} />
      ))}
    </div>
  );
};

export default NotesList;
