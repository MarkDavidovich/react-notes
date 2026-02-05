import style from "./Notes.module.css";
import NoteMaker from "../NoteMaker/NoteMaker";
import NotesList from "../NotesList/NotesList";

const Notes = () => {
  return (
    <>
      <NoteMaker />
      <NotesList />
    </>
  );
};
export default Notes;
