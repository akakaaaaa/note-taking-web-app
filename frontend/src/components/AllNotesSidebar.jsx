import "./styles/AllNotesSidebar.scss";
import { PrimaryButton } from "./PrimaryButton";
import { Note } from "./Note";
import { useNavigate, useLocation } from "react-router-dom";
import { useUser } from "../store/userContext";

export const AllNotesSidebar = ({ selectedNote, onNoteSelect }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { filteredNotes, filteredArchivedNotes, filterWord } = useUser();

  const isPageArchived = location.pathname === "/Archive";
  let notesToShow = isPageArchived ? filteredArchivedNotes : filteredNotes;

  if (filterWord.trim() !== "") {
    notesToShow = notesToShow.filter(
      (note) =>
        note.title.toLowerCase().includes(filterWord.toLowerCase()) ||
        note.content.toLowerCase().includes(filterWord.toLowerCase())
    );
  }

  const handleNewNote = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const showEmptyMessage = !notesToShow || notesToShow.length === 0;

  return (
    <div className="allnotes-container">
      <div className="btn-container">
        <PrimaryButton onClick={handleNewNote}>+ Create New Note</PrimaryButton>
      </div>

      {isPageArchived && (
        <p className="archive-notes">
          All your archived notes are stored here. You can restore or delete
          them anytime.
        </p>
      )}

      {showEmptyMessage ? (
        <div>
          <p style={style.p}>
            {isPageArchived
              ? "No notes have been archived yet. Move notes here for safekeeping, or "
              : "You don’t have any notes yet. Start a new note to capture your thoughts and ideas."}
            {isPageArchived && (
              <button className="newNoteA" onClick={handleNewNote}>
                create a new note.
              </button>
            )}
          </p>
          <div className="line"></div>
        </div>
      ) : (
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
