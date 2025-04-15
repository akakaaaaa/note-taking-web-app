import "./styles/NoteDetails.scss";
import { LastEdited } from "./LastEdited";
import { PrimaryButton } from "./PrimaryButton";
import { SecondaryButton } from "./SecondaryButton";
import tagIcon from "../assets/images/icon-tag.svg";
import { useEffect, useState } from "react";
import trashIcon from "../assets/images/icon-delete.svg";
import archiveIcon from "../assets/images/icon-archive.svg";
import leftArrowIcon from "../assets/images/icon-arrow-left.svg";
import statusIcon from "../assets/images/icon-status.svg";

export const NoteDetails = ({ note, onClose }) => {
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
      <div className="note-details-mobile-toolbar">
        <button onClick={onClose} className="go-back">
          <img src={leftArrowIcon} alt="" />
          Go Back
        </button>
        <div className="note-details-mobile-toolbar-end-menu">
          <button className="delete-note">
            <img src={trashIcon} alt="" />
          </button>
          <button className="archive-note">
            <img src={archiveIcon} alt="" />
          </button>
          <button onClick={onClose} className="cancel">
            Cancel
          </button>
          <button className="save-note">Save Note</button>
        </div>
      </div>
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

        {note.status ? (
          <div className="note-status">
            <div className="note-status-title">
              <img src={statusIcon} alt="" />
              <p className="tag-p">Status</p>
            </div>
            <div className="note-status-value">
              <p>{note.status}</p>
            </div>
          </div>
        ) : null}

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
      <div className="line-app"></div>
      <div className="note-details-buttons-container">
        <div>
          <PrimaryButton>Save Note</PrimaryButton>
        </div>
        <SecondaryButton>Cancel</SecondaryButton>
      </div>
    </div>
  );
};
