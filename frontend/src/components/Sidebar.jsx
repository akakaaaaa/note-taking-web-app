import "./styles/Sidebar.scss";
import logo from "../assets/images/logo.svg";
import archiveIcon from "../assets/images/icon-archive.svg";
import homeIcon from "../assets/images/icon-home.svg";
import arrowRightIcon from "../assets/images/icon-chevron-right.svg";
import { Tag } from "./Tag";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUser } from "../store/userContext";

export const Sidebar = ({ tags }) => {
  const { selectedTag, setSelectedTag } = useUser();

  const location = useLocation();
  const navigate = useNavigate();

  const handleAllNotesClick = () => {
    setSelectedTag(null);
    navigate("/");
  };

  const handleArchivedNotesClick = () => {
    setSelectedTag(null);
    navigate("/Archive");
  };

  function handleTagClick(tag) {
    setSelectedTag(tag);
    console.log(tag);
  }

  return (
    <div className="sidebar">
      <div className="sidebar-logo-container">
        <img className="sidebar-logo" src={logo} alt="" />
      </div>
      <div className="navigation-container">
        <div className="note-navigation">
          <button
            className={`all-notes-container ${
              location.pathname === "/" ? "active" : ""
            }`}
            onClick={handleAllNotesClick}
          >
            <img src={homeIcon} className="homeIcon" alt="" />
            <p className="all-notes">All Notes</p>
            <img className="arrowContainer" src={arrowRightIcon} alt="" />
          </button>

          <button
            className={`archived-notes-container ${
              location.pathname === "/Archive" ? "active" : ""
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

        <div className="tags-container">
          {tags.map((tag) => (
            <Tag
              key={tag}
              onClick={() => handleTagClick(tag)}
              isActive={selectedTag === tag}
            >
              {tag}
            </Tag>
          ))}
        </div>
      </div>
    </div>
  );
};
