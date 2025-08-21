import "./styles/Layout.scss";
import { Sidebar } from "./Sidebar";
import { Outlet } from "react-router-dom";
import { Toolbar } from "./Toolbar";
import notes from "../utils/notes";
import { useNavigate } from "react-router-dom";
import { useUser } from "../store/userContext";
import { useLocation } from "react-router-dom";

export const Layout = () => {
  const { tags } = useUser();

  return (
    <div className="app-layout">
      <div className="sidebar-container">
        <Sidebar tags={tags} />
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
