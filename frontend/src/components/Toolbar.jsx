import "./styles/Toolbar.scss";
import homeicon from "../assets/images/icon-home.svg";
import searchicon from "../assets/images/icon-search.svg";
import archiveicon from "../assets/images/icon-archive.svg";
import tagicon from "../assets/images/icon-tag.svg";
import settingicon from "../assets/images/icon-settings.svg";
import { Icon } from "./Icon";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const Toolbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setActiveIndex(0);
        break;
      case "/Search":
        setActiveIndex(1);
        break;
      case "/Archive":
        setActiveIndex(2);
        break;
      case "/Tags":
        setActiveIndex(3);
        break;
      case "/Settings":
        setActiveIndex(4);
        break;
      default:
        setActiveIndex(-1);
    }
  }, [location.pathname]);

  const handleRedirect = (index, path) => {
    setActiveIndex(index);
    navigate(path);
  };

  return (
    <div className="toolbar-container">
      <Icon
        source={homeicon}
        isActive={activeIndex === 0}
        onPress={() => handleRedirect(0, "/")}
      >
        Home
      </Icon>
      <div className="line"></div>

      <Icon
        source={searchicon}
        isActive={activeIndex === 1}
        onPress={() => handleRedirect(1, "/Search")}
      >
        Search
      </Icon>
      <div className="line"></div>

      <Icon
        source={archiveicon}
        isActive={activeIndex === 2}
        onPress={() => handleRedirect(2, "/Archive")}
      >
        Archived
      </Icon>
      <div className="line"></div>

      <Icon
        source={tagicon}
        isActive={activeIndex === 3}
        onPress={() => handleRedirect(3, "/Tags")}
      >
        Tags
      </Icon>
      <div className="line"></div>

      <Icon
        source={settingicon}
        isActive={activeIndex === 4}
        onPress={() => handleRedirect(4, "/Settings")}
      >
        Settings
      </Icon>
    </div>
  );
};
