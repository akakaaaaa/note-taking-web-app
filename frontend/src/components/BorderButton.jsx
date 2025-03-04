import "./styles/BorderButton.scss";
import restoreIcon from "../assets/images/icon-restore.svg";

export const BorderButton = ({ children, disabled, handleClick }) => {
  return (
    <button disabled={disabled} onClick={handleClick} className="borderBtn">
      <img className="restoreIcon" src={restoreIcon} alt="" /> <p>Login</p>
    </button>
  );
};
