import { Searchbar } from "../components/Searchbar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import "./styles/SearchPage.scss";
import { useUser } from "../store/userContext";
import { AllNotesContainer } from "../components/AllNotesContainer";

export const SearchPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const { allNotes, selectedNote, setSelectedNote, filterWord } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      navigate("/");
    }
  }, [isMobile, navigate]);

  if (!isMobile) return null;

  let notesToShow = allNotes;
  if (filterWord.trim() !== "") {
    notesToShow = notesToShow.filter(
      (note) =>
        note.title.toLowerCase().includes(filterWord.toLowerCase()) ||
        note.content.toLowerCase().includes(filterWord.toLowerCase())
    );
  }

  return (
    <div className="search-page">
      <div className="search-page-header">
        <Header />
      </div>
      <div className="searchbar-wrapper">
        <Searchbar />
        <AllNotesContainer
          notesToShow={notesToShow}
          selectedNote={selectedNote}
          onNoteSelect={setSelectedNote}
        />
      </div>
    </div>
  );
};
