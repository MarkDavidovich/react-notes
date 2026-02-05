import { useState } from "react";
import moment from "moment";
import style from "./Notes.module.css";
import NoteMaker from "../NoteMaker/NoteMaker";
import NotesList from "../NotesList/NotesList";
import Modal from "../Modal/Modal";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  console.log(notes);
  const addNote = (noteTitle, noteText) => {
    setNotes((prevNotes) => [...prevNotes, { id: Date.now(), title: noteTitle, text: noteText, dateCreated: getCurrentTime(), dateEdited: null }]);
  };

  const removeNote = (id) => {
    if (window.confirm("Delete note?")) {
      setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));

      setSelectedNote(null);
    }
  };

  const editNote = (id, newText, newTitle) => {
    setNotes((prevNotes) =>
      prevNotes.map((n) => {
        if (n.id === id) {
          return { ...n, text: newText, title: newTitle, dateEdited: getCurrentTime() };
        }
        return n;
      }),
    );
  };

  const openNote = (note) => {
    setSelectedNote(note);
  };

  const getCurrentTime = () => {
    return moment().format("MMMM Do, h:mm A");
  };

  return (
    <div className={style.container}>
      <NoteMaker onAddNote={addNote} />
      <NotesList notes={notes} onRemoveNote={removeNote} onClickNote={openNote} />
      {selectedNote && (
        <Modal
          onClose={() => setSelectedNote(null)}
          onEditNote={editNote}
          id={selectedNote.id}
          dateCreated={selectedNote.dateCreated}
          title={selectedNote.title}
          text={selectedNote.text}
          dateEdited={selectedNote.dateEdited}
        />
      )}
    </div>
  );
};

export default Notes;
