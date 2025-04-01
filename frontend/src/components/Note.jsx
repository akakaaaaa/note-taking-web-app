import { NoteInnerTag } from "./NoteInnerTag";
import "./styles/Note.scss";
import { useNavigate } from "react-router-dom";

export const Note = ({ note, isSelected }) => {
  return (
    <div className={`note ${isSelected ? "note-active" : ""}`}>
      <p className="note-title">{note.title}</p>
      <div className="tag-container">
        {note.tags.map((tag) => (
          <NoteInnerTag key={tag}>{tag}</NoteInnerTag>
        ))}
      </div>
      <p className="time-p">{note.edited_time}</p>
    </div>
  );
};
