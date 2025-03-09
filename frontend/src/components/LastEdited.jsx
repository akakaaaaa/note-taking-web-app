import "./styles/LastEdited.scss";
import timeIcon from "../assets/images/icon-clock.svg";

export const LastEdited = () => {
  return (
    <div className="last-edited-container">
      <img src={timeIcon} alt="" className="timeIcon" />
      <p>Last edited</p>
    </div>
  );
};
