import "./styles/PrimaryButton.scss";
import plusIcon from "../assets/images/icon-plus.svg";

export const PrimaryButton = ({ children, handleClick, disabled }) => {
  return (
    <button disabled={disabled} onClick={handleClick} className="primaryBtn">
      <span className="primaryBtnText">{children}</span>
      <img src={plusIcon} className="primaryBtnIcon" />
    </button>
  );
};
