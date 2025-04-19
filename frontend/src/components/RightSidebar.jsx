import "./styles/RightSidebar.scss";
import { BorderButton } from "./BorderButton";
import archiveIcon from "../assets/images/icon-archive.svg";
import deleteIcon from "../assets/images/icon-delete.svg";
import restoreIcon from "../assets/images/icon-restore.svg";

export const RightSidebar = ({ isArchive }) => {
  if (isArchive) {
    return (
      <div className="right-sidebar-container">
        <BorderButton icon={restoreIcon}>Restore Note</BorderButton>
        <BorderButton icon={deleteIcon}>Delete Note</BorderButton>
      </div>
    );
  } else {
    return (
      <div className="right-sidebar-container">
        <BorderButton icon={archiveIcon}>Archive Note</BorderButton>
        <BorderButton icon={deleteIcon}>Delete Note</BorderButton>
      </div>
    );
  }
};
