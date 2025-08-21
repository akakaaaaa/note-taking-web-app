import { useUser } from "../store/userContext";
import { Note } from "./Note";
import "./styles/AllNotesContainer.scss";

export const AllNotesContainer = ({
  notesToShow,
  selectedNote,
  onNoteSelect,
}) => {
  return (
    <div className="notes-container">
      {notesToShow.map((note) => (
        <div
          className="notewrapper"
          key={note.id}
          onClick={() => onNoteSelect(note)}
        >
          <Note note={note} isSelected={selectedNote?.id === note.id} />
          <div className="line"></div>
        </div>
      ))}
    </div>
  );
};
