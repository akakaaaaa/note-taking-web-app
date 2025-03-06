import "./styles/NoteInnerTag.scss";

export const NoteInnerTag = ({ children }) => {
  return (
    <div className="inner-tag">
      <p>{children}</p>
    </div>
  );
};
