import "./styles/Toolbar.scss";
import homeicon from "../assets/images/icon-home.svg";
import searchicon from "../assets/images/icon-search.svg";
import archiveicon from "../assets/images/icon-archive.svg";
import tagicon from "../assets/images/icon-tag.svg";
import settingicon from "../assets/images/icon-settings.svg";
import { Icon } from "./Icon";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Toolbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const navigate = useNavigate();

  const handleHomeRedirect = () => {
    setActiveIndex(0);
    navigate("/");
  };

  const handleArchiveRedirect = () => {
    setActiveIndex(2);
    navigate("/Archive");
  };

  const handleSearchRedirect = () => {
    setActiveIndex(1);
  };

  const handleTagsRedirect = () => {
    setActiveIndex(3);
  };

  const handleSettingsRedirect = () => {
    setActiveIndex(4);
  };

  return (
    <div className="toolbar-container">
      <Icon
        source={homeicon}
        isActive={activeIndex === 0}
        onPress={handleHomeRedirect}
      >
        Home
      </Icon>
      <div className="line"></div>
      <Icon
        source={searchicon}
        isActive={activeIndex === 1}
        onPress={() => setActiveIndex(1)}
      >
        Search
      </Icon>
      <div className="line"></div>

      <Icon
        source={archiveicon}
        isActive={activeIndex === 2}
        onPress={handleArchiveRedirect}
      >
        Archived
      </Icon>
      <div className="line"></div>

      <Icon
        source={tagicon}
        isActive={activeIndex === 3}
        onPress={() => setActiveIndex(3)}
      >
        Tags
      </Icon>
      <div className="line"></div>

      <Icon
        source={settingicon}
        isActive={activeIndex === 4}
        onPress={() => setActiveIndex(4)}
      >
        Settings
      </Icon>
    </div>
  );
};
