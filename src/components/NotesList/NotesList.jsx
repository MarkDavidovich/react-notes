import style from "./NotesList.module.css";
import Note from "../Note/Note";

const NotesList = ({ notes }) => {
  console.log(notes);

  return (
    <div>
      {notes.map((n) => (
        <Note key={n.id} text={n.text} dateCreated={n.dateCreated} />
      ))}
    </div>
  );
};

export default NotesList;
