import { useState } from "react";
import moment from "moment";
import style from "./Notes.module.css";
import NoteMaker from "../NoteMaker/NoteMaker";
import NotesList from "../NotesList/NotesList";
import Modal from "../Modal/Modal";
import { saveToLocalStorage, loadFromLocalStorage } from "../../utils/storage";

const Notes = () => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = loadFromLocalStorage();
    if (savedNotes) {
      return savedNotes;
    }
    return [];
  });
  const [selectedNote, setSelectedNote] = useState(null);

  const addNote = (noteTitle, noteText, noteColor = "#ffffff", noteCategory = null) => {
    const newNote = {
      id: Date.now(),
      title: noteTitle,
      text: noteText,
      dateCreated: getCurrentTime(),
      dateEdited: null,
      color: noteColor,
      category: noteCategory,
    };

    setNotes((prevNotes) => {
      const updatedNotes = [...prevNotes, newNote];
      saveToLocalStorage(updatedNotes);
      return updatedNotes;
    });
  };

  const removeNote = (id) => {
    if (window.confirm("Delete note?")) {
      setNotes((prevNotes) => {
        const updatedNotes = prevNotes.filter((n) => n.id !== id);
        saveToLocalStorage(updatedNotes);
        setSelectedNote(null);
        return updatedNotes;
      });
    }
  };

  const editNote = (id, newText, newTitle) => {
    setNotes((prevNotes) => {
      const updatedNotes = prevNotes.map((n) => {
        if (n.id === id) {
          return { ...n, text: newText, title: newTitle, dateEdited: getCurrentTime() };
        }
        return n;
      });
      saveToLocalStorage(updatedNotes);
      return updatedNotes;
    });
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
          color={selectedNote.color}
        />
      )}
    </div>
  );
};

export default Notes;
