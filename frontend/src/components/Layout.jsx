import "./styles/Layout.scss";
import { Sidebar } from "./Sidebar";
import { Outlet } from "react-router-dom";
import { Toolbar } from "./Toolbar";
import notes from "../utils/notes";
import { useNavigate } from "react-router-dom";
import { useUser } from "../store/userContext";
import { useLocation } from "react-router-dom";

export const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { notes, archivedNotes } = useUser();

  const allTags = [];

  location.pathname === "/Archive"
    ? archivedNotes.forEach((note) => allTags.push(...note.tags))
    : notes.forEach((note) => allTags.push(...note.tags));

  notes.forEach((note) => allTags.push(...note.tags));
  const uniqueRegularTags = [...new Set(allTags)];

  return (
    <div className="app-layout">
      <div className="searchbar-container">
        <Sidebar tags={uniqueRegularTags} />
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
