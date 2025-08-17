import "./styles/Sidebar.scss";
import logo from "../assets/images/logo.svg";
import archiveIcon from "../assets/images/icon-archive.svg";
import homeIcon from "../assets/images/icon-home.svg";
import arrowRightIcon from "../assets/images/icon-chevron-right.svg";

import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../store/userContext";
import { TagsContainer } from "./TagsContainer";

export const Sidebar = ({ tags }) => {
  const { selectedTag, setSelectedTag, setSelectedPage } = useUser();

  const location = useLocation();
  const navigate = useNavigate();

  const handleAllNotesClick = () => {
    setSelectedTag(null);
    setSelectedPage("All notes");
    navigate("/");
  };

  const handleArchivedNotesClick = () => {
    setSelectedTag(null);
    setSelectedPage("Archived Notes");
    navigate("/Archive");
  };

  return (
    <div className="sidebar">
      <div className="sidebar-logo-container">
        <img className="sidebar-logo" src={logo} alt="" />
      </div>
      <div className="navigation-container">
        <div className="note-navigation">
          <button
            className={`all-notes-container ${
              location.pathname === "/" && !selectedTag ? "active" : ""
            }`}
            onClick={handleAllNotesClick}
          >
            <img src={homeIcon} className="homeIcon" alt="" />
            <p className="all-notes">All Notes</p>
            <img className="arrowContainer" src={arrowRightIcon} alt="" />
          </button>

          <button
            className={`archived-notes-container ${
              location.pathname === "/Archive" && !selectedTag ? "active" : ""
            }`}
            onClick={handleArchivedNotesClick}
          >
            <img src={archiveIcon} className="archiveIcon" alt="" />
            <p className="archived-notes">Archived Notes</p>
            <img className="arrowContainer" src={arrowRightIcon} alt="" />
          </button>
        </div>
        <div className="line"></div>
        <div className="p-wrap">
          <p>Tags</p>
        </div>

        <TagsContainer tags={tags} />
      </div>
    </div>
  );
};
