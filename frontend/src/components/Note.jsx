import { NoteInnerTag } from "./NoteInnerTag";
import "./styles/Note.scss";

export const Note = ({ active, title, tags, note_content, edited_time }) => {
  return (
    <div className={`note ${active ? "note-active" : ""}`}>
      <p className="note-title">{title}</p>
      <div className="tag-container">
        {tags.map((tag) => (
          <NoteInnerTag>{tag}</NoteInnerTag>
        ))}
      </div>
      <p className="time-p">{edited_time}</p>
    </div>
  );
};
