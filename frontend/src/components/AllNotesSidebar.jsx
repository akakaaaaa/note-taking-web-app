import "./styles/AllNotesSidebar.scss";
import { PrimaryButton } from "./PrimaryButton";
import { useNavigate, useLocation } from "react-router-dom";
import { useUser } from "../store/userContext";
import { AllNotesContainer } from "./AllNotesContainer";
import { useEffect } from "react";

export const AllNotesSidebar = ({}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    filteredNotes,
    filteredArchivedNotes,
    filterWord,
    selectedTag,
    filteredAllNotes,
    selectedPage,
    notes,
    setSelectedNote,
    selectedNote,
  } = useUser();

  useEffect(() => {
    setSelectedNote(null);
  }, [notes]);

  const isPageArchived = location.pathname === "/Archive";
  let notesToShow = isPageArchived
    ? filteredArchivedNotes
    : selectedTag
    ? filteredAllNotes
    : filteredNotes;

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

      {selectedTag ? (
        <h2 className="selected-tag-hint">
          Notes Tagged: <span>{selectedTag}</span>
        </h2>
      ) : (
        <h2 className="searchbar-h2">
          {selectedPage ? selectedPage : "All notes"}
        </h2>
      )}

      {selectedTag && (
        <div className="note-hint">
          <p> All notes with the ”{selectedTag}” tag are shown here.</p>
        </div>
      )}

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
              ? !filterWord
                ? "No notes have been archived yet. Move notes here for safekeeping, or "
                : "No notes match your search. Try a different keyword or "
              : filterWord
              ? "No notes match your search. Try a different keyword or "
              : "You don’t have any notes yet. Start a new note to capture your thoughts and ideas."}
            {isPageArchived ? (
              <span
                className="newNoteA"
                role="button"
                tabIndex={0}
                onClick={handleNewNote}
              >
                create a new note.
              </span>
            ) : filterWord ? (
              <span
                className="newNoteA"
                role="button"
                tabIndex={0}
                onClick={handleNewNote}
              >
                create a new note.
              </span>
            ) : null}
          </p>
          <div className="line"></div>
        </div>
      ) : (
        <AllNotesContainer
          notesToShow={notesToShow}
          selectedNote={selectedNote}
          onNoteSelect={setSelectedNote}
        />
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
