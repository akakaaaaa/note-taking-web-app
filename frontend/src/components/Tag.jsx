import "./styles/Tag.scss";
import tagIcon from "../assets/images/icon-tag.svg";
import arrowIcon from "../assets/images/icon-chevron-right.svg";

export const Tag = ({ children, isActive, onClick }) => {
  return (
    <div
      className={`tag-container ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <img src={tagIcon} alt="" className="tagIcon" />
      <p className="tag-p">{children}</p>
      <div className="arrowContainer">
        <img src={arrowIcon} alt="" />
      </div>
    </div>
  );
};
