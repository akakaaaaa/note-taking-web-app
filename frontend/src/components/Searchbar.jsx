import "./styles/Searchbar.scss";
import searchIcon from "../assets/images/icon-search.svg";
import settingsIcon from "../assets/images/icon-settings.svg";
import { useState } from "react";
import logo from "../assets/images/logo.svg";
import { useUser } from "../store/userContext";

export const Searchbar = ({}) => {
  const { filterWord, setFilterWord } = useUser();

  return (
    <div className="header">
      <img className="tablet-icon" src={logo} alt="" />

      <h2 className="searchbar-h2">All Notes</h2>
      <div className="searchbar-container">
        <div className="search-input-container">
          <img src={searchIcon} alt="" className="searchIcon" />
          <p className="search-text-tablet">Search</p>
          <input
            type="text"
            className="inputbar"
            name="searchbar"
            id=""
            placeholder="Search by title, content, or tags..."
            value={filterWord}
            onChange={(e) => {
              setFilterWord(e.target.value);
            }}
          />
        </div>
        <div className="settingsicon-container">
          <img src={settingsIcon} alt="" className="settingsIcon" />
        </div>
      </div>
    </div>
  );
};
