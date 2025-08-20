import "./styles/Toolbar.scss";
import homeicon from "../assets/images/icon-home.svg";
import searchicon from "../assets/images/icon-search.svg";
import archiveicon from "../assets/images/icon-archive.svg";
import tagicon from "../assets/images/icon-tag.svg";
import settingicon from "../assets/images/icon-settings.svg";
import { Icon } from "./Icon";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useUser } from "../store/userContext";

export const Toolbar = () => {
  const {
    setSelectedTag,
    setSelectedPage,
    activeIndex,
    setActiveIndex,
    selectedTag,
  } = useUser();
  const location = useLocation();
  const navigate = useNavigate();

  const icons = [
    { source: homeicon, label: "Home", path: "/", index: 0, page: "All Notes" },
    { source: searchicon, label: "Search", path: "/Search", index: 1 },
    {
      source: archiveicon,
      label: "Archived",
      path: "/Archive",
      index: 2,
      page: "Archived Notes",
    },
    { source: tagicon, label: "Tags", path: "/Tags", index: 3 },
    { source: settingicon, label: "Settings", path: "/Settings", index: 4 },
  ];

  useEffect(() => {
    if (selectedTag) {
      // If a tag is selected, don't highlight any toolbar icon
      setActiveIndex(null);
      return;
    }

    const match = icons.find((icon) => icon.path === location.pathname);
    if (match) {
      setActiveIndex(match.index);
      if (match.page) setSelectedPage(match.page);
    } else {
      setActiveIndex(-1);
    }
  }, [location.pathname, selectedTag]);

  const handleRedirect = (index, path, page) => {
    setActiveIndex(index);
    setSelectedTag(null);
    if (page) setSelectedPage(page);
    navigate(path);
  };

  return (
    <div className="toolbar-container">
      {icons.map(({ source, label, path, index, page }, i) => (
        <div key={index} className="toolbar-item">
          <Icon
            source={source}
            isActive={activeIndex === index}
            onPress={() => handleRedirect(index, path, page)}
          >
            {label}
          </Icon>

          {/* vertical line between icons, except last */}
          {i < icons.length - 1 && <div className="line"></div>}
        </div>
      ))}
    </div>
  );
};
