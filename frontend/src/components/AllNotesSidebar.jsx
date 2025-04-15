import "./styles/AllNotesSidebar.scss";
import { PrimaryButton } from "./PrimaryButton";
import { Note } from "./Note";
import { useNavigate } from "react-router-dom";

export const AllNotesSidebar = ({
  notes,
  selectedNote,
  onNoteSelect,
  archived,
}) => {
  const navigate = useNavigate();

  function handleNewNote(e) {
    e.preventDefault();
    navigate("/");
  }

  const showEmptyMessage = !notes || notes.length === 0;

  return (
    <div className="allnotes-container">
      <div className="btn-container">
        <PrimaryButton>+ Create New Note</PrimaryButton>
      </div>

      {archived && (
        <p className="archive-notes">
          All your archived notes are stored here. You can restore or delete
          them anytime.
        </p>
      )}

      {showEmptyMessage ? (
        <div>
          <p style={style.p}>
            {archived
              ? "No notes have been archived yet. Move notes here for safekeeping, or "
              : "You don’t have any notes yet. Start a new note to capture your thoughts and ideas."}
            {archived && (
              <a className="newNoteA" href="/" onClick={handleNewNote}>
                create a new note.
              </a>
            )}
          </p>
          <div className="line"></div>
        </div>
      ) : (
        <div className="notes-container">
          {notes.map((note) => (
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
      )}
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
};
