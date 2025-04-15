import "./styles/Home.scss";
import { Searchbar } from "../components/Searchbar";
import { AllNotesSidebar } from "../components/AllNotesSidebar";
import { NoteDetails } from "../components/NoteDetails";
import { RightSidebar } from "../components/RightSidebar";
import { useState } from "react";
import { useEffect } from "react";
import notes from "../utils/notes";
import useWindowWidth from "../utils/useWindowWidth";

export const Home = () => {
  const [selectedNote, setSelectedNote] = useState(null);

  const width = useWindowWidth();
  const isMobileOrTablet = width <= 1024;

  useEffect(() => {
    setSelectedNote(null);
  }, [notes]);

  return (
    <div className="homepage">
      <div className="searchbar">
        <Searchbar />
      </div>
      <div className="allnotessidebar">
        <AllNotesSidebar
          notes={notes}
          selectedNote={selectedNote}
          onNoteSelect={setSelectedNote}
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
      <div className="rightsidebar">{selectedNote && <RightSidebar />}</div>
    </div>
  );
};
