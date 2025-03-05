import "./styles/Sidebar.scss";
import logo from "../assets/images/logo.svg";
import archiveIcon from "../assets/images/icon-archive.svg";
import homeIcon from "../assets/images/icon-home.svg";
import arrowRightIcon from "../assets/images/icon-chevron-right.svg";
import { Tag } from "./Tag";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo-container">
        <img className="sidebar-logo" src={logo} alt="" />
      </div>
      <div className="navigation-container">
        <div className="note-navigation">
          <div className="all-notes-container">
            <img src={homeIcon} className="homeIcon" alt="" />
            <a href="" className="all-notes">
              All Notes
            </a>
            <img className="arrowContainer" src={arrowRightIcon} alt="" />
          </div>

          <div className="archived-notes-container">
            <img src={archiveIcon} className="archiveIcon" alt="" />
            <a href="" className="archived-notes">
              Archived Notes
            </a>
            <img className="arrowContainer" src={arrowRightIcon} alt="" />
          </div>
        </div>
        <div className="line"></div>
        <div className="p-wrap">
          <p>Tags</p>
        </div>

        <div className="tags-container">
          <Tag>Tag</Tag>
          <Tag>Tag</Tag>
          <Tag>Tag</Tag>
          <Tag>Tag</Tag>
          <Tag>Tag</Tag>
          <Tag>Tag</Tag>
          <Tag>Tag</Tag>
          <Tag>Tag</Tag>
          <Tag>Tag</Tag>
          <Tag>Tag</Tag>
          <Tag>Tag</Tag>
          <Tag>Tag</Tag>
          <Tag>Tag</Tag>
          <Tag>Tag</Tag>
          <Tag>Tag</Tag>
          <Tag>Tag</Tag>
          <Tag>Tag</Tag>
          <Tag>Tag</Tag>
          <Tag>Tag</Tag>
          <Tag>Tag</Tag>
          <Tag>Tag</Tag>
          <Tag>Tag</Tag>
          <Tag>Tag</Tag>
          <Tag>Tag</Tag>
          <Tag>Tag</Tag>
          <Tag>Tag</Tag>
          <Tag>Tag</Tag>
          <Tag>Tag</Tag>
          <Tag>Tag</Tag>
          <Tag>Tag</Tag>
          <Tag>Tag</Tag>
          <Tag>Tag</Tag>
          <Tag>Tag</Tag>
          <Tag>Tag</Tag>
          <Tag>Tag</Tag>
          <Tag>Tag</Tag>
          <Tag>Tag</Tag>
          <Tag>Tag</Tag>
          <Tag>Tag</Tag>
        </div>
      </div>
    </div>
  );
};
