import "./styles/AllNotesSidebar.scss";
import { PrimaryButton } from "./PrimaryButton";
import { Note } from "./Note";

export const AllNotesSidebar = ({ notes, selectedNote, onNoteSelect }) => {
  if (!notes) {
    return (
      <div className="allnotes-container">
        <div className="btn-container">
          <PrimaryButton>+ Create New Note</PrimaryButton>
        </div>
        <p style={style.p}>
          You don’t have any notes yet. Start a new note to capture your
          thoughts and ideas.
        </p>
        <div className="line"></div>
      </div>
    );
  }

  return (
    <div className="allnotes-container">
      <div className="btn-container">
        <PrimaryButton>+ Create New Note</PrimaryButton>
      </div>

      <p className="app-all-notes-p">All Notes</p>

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

const style = {
  p: {
    boxSizing: "border-box",
    backgroundColor: "#f3f5f8",
    border: "1px solid #e0e4ea",
    borderRadius: "8px",
    fontSize: "14px",
    height: "min-content",
    padding: "8px",
    lineHeight: "130%",
    letterSpacing: "-0.2px",
  },
  p2: {
    display: "block",
    color: "black",
    fontSize: "24px",
    fontWeight: "bold",
    lineHeight: "120%",
    letterSpacing: "-0.5px",
  },
};
