import style from "./NotesList.module.css";
import Note from "../Note/Note";
import { useState } from "react";

const NotesList = ({ notes, onRemoveNote, onClickNote }) => {
  const [searchedText, setSearchedText] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  const categories = ["personal", "work", "study", "other"];
  const filteredNotes = notes.filter((n) => {
    const textMatch = n.title.toLowerCase().includes(searchedText.toLowerCase()) || n.text.toLowerCase().includes(searchedText.toLowerCase());
    const categoryMatch = filterCategory ? n.category === filterCategory : true;
    return textMatch && categoryMatch;
  });

  const toggleFilter = (category) => {
    setFilterCategory((prev) => (prev === category ? null : category));
  };

  return (
    <>
      <div className={style.query} style={notes.length > 1 ? { visibility: "visible" } : { visibility: "hidden" }}>
        <input
          type="text"
          id={style.search}
          placeholder="Search notes..."
          onChange={(e) => {
            setSearchedText(e.target.value);
          }}
        />

        <div className={style.filter}>
          {categories.map((c) => (
            <button
              key={c}
              className={`${filterCategory === c ? style.active : ""}`}
              onClick={() => {
                toggleFilter(c);
              }}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className={style.container}>
        {filteredNotes.map((n) => (
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
    </>
  );
};

export default NotesList;
