import "./styles/NoteDetails.scss";
import { Tag } from "./Tag";
import { LastEdited } from "./LastEdited";
import { PrimaryButton } from "./PrimaryButton";
import { SecondaryButton } from "./SecondaryButton";
import tagIcon from "../assets/images/icon-tag.svg";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import notes from "./notes";

export const NoteDetails = ({ note }) => {
  if (!note) {
    return null;
  }

  const [content, setContent] = useState(note.content);
  const [title, setTitle] = useState(note.title);

  useEffect(() => {
    setContent(note.content);
    setTitle(note.title);
  }, [note]);

  return (
    <div className="note-details-container">
      <div className="note-details-mobile-toolbar"></div>
      <div className="note-details-title">
        <textarea
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div className="note-details">
        <div className="note-tags">
          <div className="note-details-tag-title">
            <img src={tagIcon} alt="" />
            <p className="tag-p">Tags</p>
          </div>
          <div className="note-details-tags">
            {note.tags.map((tag, index) => (
              <span key={tag}>
                {tag}
                {index < note.tags.length - 1 ? <>,&nbsp;</> : null}
              </span>
            ))}
          </div>
        </div>
        <div className="note-edit-time">
          <LastEdited />
          <p>{note.edited_time}</p>
        </div>
      </div>
      <div className="line"></div>
      <textarea
        className="note-content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div className="line"></div>
      <div className="note-details-buttons-container">
        <div>
          <PrimaryButton>Save Note</PrimaryButton>
        </div>
        <SecondaryButton>Cancel</SecondaryButton>
      </div>
    </div>
  );
};
