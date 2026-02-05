import style from "./Notes.module.css";
import NoteMaker from "../NoteMaker/NoteMaker";
import NotesList from "../NotesList/NotesList";
import { useState } from "react";
import moment from "moment";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (noteText) => {
    setNotes((prevNotes) => [...prevNotes, { id: Date.now(), text: noteText, dateCreated: moment().format("MMMM Do, h:mm A") }]);
  };

  const removeNote = (id) => {
    if (window.confirm("Delete note?")) {
      setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));
    }
  };

  return (
    <div className={style.container}>
      <NoteMaker onAddNote={addNote} />
      <NotesList notes={notes} onRemoveNote={removeNote} />
    </div>
  );
};
export default Notes;
