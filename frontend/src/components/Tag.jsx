import "./styles/Tag.scss";
import tagIcon from "../assets/images/icon-tag.svg";
import arrowIcon from "../assets/images/icon-chevron-right.svg";

export const Tag = ({ children }) => {
  return (
    <div className="tag-container">
      <img src={tagIcon} alt="" className="tagIcon" />
      <p className="tag-p">{children}</p>
      <div className="arrowContainer">
        <img src={arrowIcon} alt="" />
      </div>
    </div>
  );
};
