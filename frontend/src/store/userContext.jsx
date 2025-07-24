import { createContext, useContext, useState } from "react";
import archivedNotes from "../utils/archivedNotes.js";
import notes from "../utils/notes.js";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [selectedTag, setSelectedTag] = useState(null);

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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
