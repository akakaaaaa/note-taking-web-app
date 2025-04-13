import "./styles/Home.scss";
import { Sidebar } from "../components/Sidebar";
import { Searchbar } from "../components/Searchbar";
import { Note } from "../components/Note";
import { NoteInnerTag } from "../components/NoteInnerTag";
import { AllNotesSidebar } from "../components/AllNotesSidebar";
import { NoteDetails } from "../components/NoteDetails";
import { RightSidebar } from "../components/RightSidebar";
import { useState } from "react";
import { Toolbar } from "../components/Toolbar";
import { useEffect } from "react";
import notes from "../components/notes";
import useWindowWidth from "../components/useWindowWidth";

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
