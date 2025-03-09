import "./styles/NoteDetails.scss";
import { Tag } from "./Tag";
import { LastEdited } from "./LastEdited";
import { PrimaryButton } from "./PrimaryButton";
import { SecondaryButton } from "./SecondaryButton";
import tagIcon from "../assets/images/icon-tag.svg";

export const NoteDetails = ({ note }) => {
  return (
    <div className="note-details-container">
      <div className="note-details-title">
        <h1>{note.title}</h1>
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
      <div className="note-content">{note.content}</div>
      <div className="line"></div>
      <div className="note-details-buttons-container">
        <div>
          <PrimaryButton>Save Note</PrimaryButton>
        </div>
        <SecondaryButton>Candel</SecondaryButton>
      </div>
    </div>
  );
};
