import "./styles/AllNotesSidebar.scss";
import { PrimaryButton } from "./PrimaryButton";
import { Note } from "./Note";

export const AllNotesSidebar = ({ notes, selectedNote, onNoteSelect }) => {
  return (
    <div className="allnotes-container">
      <div className="btn-container">
        <PrimaryButton>+ Create New Note</PrimaryButton>
      </div>

      <div className="notes-container">
        {notes.length > 0 ? (
          notes.map((note) => (
            <div
              className="notewrapper"
              key={note.id}
              onClick={() => onNoteSelect(note)}
            >
              <Note note={note} isSelected={selectedNote?.id === note.id} />
              <div className="line"></div>
            </div>
          ))
        ) : (
          <p>No notes</p>
        )}
      </div>
    </div>
  );
};
