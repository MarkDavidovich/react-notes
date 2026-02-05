import { useState } from "react";
import moment from "moment";
import style from "./Notes.module.css";
import NoteMaker from "../NoteMaker/NoteMaker";
import NotesList from "../NotesList/NotesList";
import Modal from "../Modal/Modal";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  const addNote = (noteTitle, noteText) => {
    setNotes((prevNotes) => [...prevNotes, { id: Date.now(), title: noteTitle, text: noteText, dateCreated: moment().format("MMMM Do, h:mm A") }]);
  };

  const removeNote = (id) => {
    if (window.confirm("Delete note?")) {
      setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));
    }
  };

  const openNote = (note) => {
    console.log(note);
    setSelectedNote(note);
  };

  return (
    <div className={style.container}>
      {selectedNote && (
        <Modal
          onClose={() => setSelectedNote(null)}
          id={selectedNote.id}
          dateCreated={selectedNote.dateCreated}
          title={selectedNote.title}
          text={selectedNote.text}
        />
      )}
      <NoteMaker onAddNote={addNote} />
      <NotesList notes={notes} onRemoveNote={removeNote} onClickNote={openNote} />
    </div>
  );
};
export default Notes;
