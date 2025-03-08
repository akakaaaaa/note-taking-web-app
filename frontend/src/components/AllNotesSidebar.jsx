import "./styles/AllNotesSidebar.scss";
import { PrimaryButton } from "./PrimaryButton";
import { Note } from "./Note";

export const AllNotesSidebar = ({ notes }) => {
  return (
    <div className="allnotes-container">
      <div className="btn-container">
        <PrimaryButton>+ Create New Note</PrimaryButton>
      </div>

      <div className="notes-container">
        {notes ? (
          notes.map((note) => {
            return (
              <>
                <Note
                  active={note.active}
                  title={note.title}
                  tags={note.tags}
                  note_content={note.note_content}
                  edited_time={note.edited_time}
                />
                <div className="line"></div>
              </>
            );
          })
        ) : (
          <p>No notes</p>
        )}
      </div>
    </div>
  );
};
