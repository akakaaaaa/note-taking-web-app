import "./styles/Header.scss";

import logo from "../assets/images/logo.svg";
import { useUser } from "../store/userContext";
import { Searchbar } from "./Searchbar";

export const Header = ({}) => {
  const { filterWord, selectedPage, selectedTag } = useUser();

  return (
    <div className="header">
      <img className="tablet-icon" src={logo} alt="" />

      <h2
        className={
          selectedTag && !filterWord ? "selected-tag-hint" : "searchbar-h2"
        }
      >
        {filterWord ? (
          <>
            Showing results for: <span>{filterWord}</span>
          </>
        ) : selectedTag ? (
          <>
            Notes Tagged: <span>{selectedTag}</span>
          </>
        ) : selectedPage ? (
          selectedPage
        ) : (
          "All notes"
        )}
      </h2>

      <Searchbar />
    </div>
  );
};
