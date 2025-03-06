import { useState } from "react";
import { Login } from "./pages/Login";
import "./styles/main.scss";
import { Register } from "./pages/Register";
import { Sidebar } from "./components/Sidebar";
import { Searchbar } from "./components/Searchbar";
import { Note } from "./components/Note";
import { NoteInnerTag } from "./components/NoteInnerTag";

function App() {
  return (
    <>
      <Note
        active={false}
        title={"React Performance Optimization"}
        tags={["Dev", "React"]}
        edited_time={"29 Oct 2024"}
      />
    </>
  );
}

export default App;
