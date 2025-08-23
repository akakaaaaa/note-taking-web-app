import { createContext, useContext, useState, useMemo, useEffect } from "react";
import archivedNotes from "../utils/archivedNotes.js";
import notes from "../utils/notes.js";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [selectedTag, setSelectedTag] = useState(null);
  const [filterWord, setFilterWord] = useState("");
  const [selectedPage, setSelectedPage] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    if (location.pathname === "/Archive") setSelectedPage("Archived Notes");
    else setSelectedPage("All Notes");
    // setFilterWord("");
  }, [location.pathname]);

  // All notes combined
  const allNotes = [...notes, ...archivedNotes];

  // Filtered notes separately
  const filteredNotes = selectedTag
    ? notes.filter((note) => note.tags.includes(selectedTag))
    : notes;

  const filteredArchivedNotes = selectedTag
    ? archivedNotes.filter((note) => note.tags.includes(selectedTag))
    : archivedNotes;

  // Combined filtered array
  const filteredAllNotes = useMemo(
    () => [...filteredNotes, ...filteredArchivedNotes],
    [filteredNotes, filteredArchivedNotes]
  );

  // Compute unique tags
  const tags = useMemo(() => {
    const allTags = [...notes, ...archivedNotes].flatMap((note) => note.tags);
    return [...new Set(allTags)];
  }, []);

  return (
    <UserContext.Provider
      value={{
        notes,
        archivedNotes,
        selectedTag,
        setSelectedTag,
        filteredNotes,
        filteredArchivedNotes,
        filteredAllNotes,
        filterWord,
        setFilterWord,
        tags,
        selectedPage,
        setSelectedPage,
        activeIndex,
        setActiveIndex,
        selectedNote,
        setSelectedNote,
        allNotes,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
