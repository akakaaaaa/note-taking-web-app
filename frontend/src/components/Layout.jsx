import "./styles/Layout.scss";
import { Sidebar } from "./Sidebar";
import { Outlet } from "react-router-dom";
import { Toolbar } from "./Toolbar";
import notes from "../utils/notes";
import { useNavigate } from "react-router-dom";

export const Layout = () => {
  const navigate = useNavigate();

  const allTags = [];
  notes.forEach((note) => allTags.push(...note.tags));
  const uniqueTags = [...new Set(allTags)];

  return (
    <div className="app-layout">
      <div className="searchbar-container">
        <Sidebar tags={uniqueTags} />
      </div>
      <div className="page-content">
        <Outlet />
      </div>
      <div className="toolbar-container-app">
        <Toolbar />
      </div>
    </div>
  );
};
