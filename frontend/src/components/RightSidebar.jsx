import "./styles/RightSidebar.scss";
import { BorderButton } from "./BorderButton";
import archiveIcon from "../assets/images/icon-archive.svg";
import deleteIcon from "../assets/images/icon-delete.svg";

export const RightSidebar = () => {
  return (
    <div className="right-sidebar-container">
      <BorderButton icon={archiveIcon}>Archive Note</BorderButton>
      <BorderButton icon={deleteIcon}>Delete Note</BorderButton>
    </div>
  );
};
