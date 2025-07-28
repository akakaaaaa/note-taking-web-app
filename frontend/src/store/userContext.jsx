import { createContext, useContext, useState } from "react";
import archivedNotes from "../utils/archivedNotes.js";
import notes from "../utils/notes.js";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [selectedTag, setSelectedTag] = useState(null);
  const [filterWord, setFilterWord] = useState("");

  const filteredNotes = selectedTag
    ? notes.filter((note) => note.tags.includes(selectedTag))
    : notes;

  const filteredArchivedNotes = selectedTag
    ? archivedNotes.filter((note) => note.tags.includes(selectedTag))
    : archivedNotes;

  return (
    <UserContext.Provider
      value={{
        notes,
        archivedNotes,
        selectedTag,
        setSelectedTag,
        filteredNotes,
        filteredArchivedNotes,
        setFilterWord,
        filterWord,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
