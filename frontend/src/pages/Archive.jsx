import "./styles/Archive.scss";
import { Header } from "../components/Header";
import { AllNotesSidebar } from "../components/AllNotesSidebar";
import { NoteDetails } from "../components/NoteDetails";
import { RightSidebar } from "../components/RightSidebar";
import { useState } from "react";
import { useEffect } from "react";
import useWindowWidth from "../utils/useWindowWidth";
import { useUser } from "../store/userContext";

export const Archive = () => {
  const [selectedNote, setSelectedNote] = useState(null);
  const { archivedNotes } = useUser();

  const width = useWindowWidth();
  const isMobileOrTablet = width <= 1024;

  useEffect(() => {
    setSelectedNote(null);
  }, [archivedNotes]);

  return (
    <div className="archivepage">
      <div className="header-container">
        <Header />
      </div>
      <div className="allnotessidebar">
        <AllNotesSidebar
          notes={archivedNotes}
          selectedNote={selectedNote}
          onNoteSelect={setSelectedNote}
          archived={true}
        />
      </div>
      <div className="notedetails">
        {selectedNote &&
          (isMobileOrTablet ? (
            <NoteDetails
              note={selectedNote}
              onClose={() => setSelectedNote(null)}
            />
          ) : (
            <NoteDetails note={selectedNote} />
          ))}
      </div>
      <div className="rightsidebar">
        {selectedNote && <RightSidebar isArchive={true} />}
      </div>
    </div>
  );
};
