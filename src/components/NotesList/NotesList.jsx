import style from "./NotesList.module.css";
import Note from "../Note/Note";

const NotesList = ({ notes, onRemoveNote, onClickNote }) => {
  return (
    <div className={style.container}>
      {/* <div>Notes here? if yes, sort By a dropdown</div> */}
      {notes.map((n) => (
        <Note
          key={n.id}
          id={n.id}
          title={n.title}
          text={n.text}
          dateCreated={n.dateCreated}
          dateEdited={n.dateEdited}
          onRemoveNote={onRemoveNote}
          onClickNote={onClickNote}
          color={n.color}
        />
      ))}
    </div>
  );
};

export default NotesList;
