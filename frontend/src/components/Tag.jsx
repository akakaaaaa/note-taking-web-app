import "./styles/Tag.scss";
import tagIcon from "../assets/images/icon-tag.svg";

export const Tag = ({ children }) => {
  return (
    <div className="tag-container">
      <img src={tagIcon} alt="" />
      <p className="tag-p">{children}</p>
    </div>
  );
};
