import { useState } from "react";
import { Login } from "./pages/Login";
import "./styles/main.scss";
import { Register } from "./pages/Register";
import { Sidebar } from "./components/Sidebar";
import { Searchbar } from "./components/Searchbar";
import { Note } from "./components/Note";
import { NoteInnerTag } from "./components/NoteInnerTag";
import { AllNotesSidebar } from "./components/AllNotesSidebar";
import { NoteDetails } from "./components/NoteDetails";
import { RightSidebar } from "./components/RightSidebar";
import { Home } from "./pages/Home";
import { ForgotPassword } from "./pages/ForgotPassword";
import { ResetPassword } from "./pages/ResetPassword";
import { Toolbar } from "./components/Toolbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import notes from "./components/notes";
import { Layout } from "./components/Layout";
import { Archieve } from "./pages/Archieve";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="archive" element={<Archieve />} />
        {/* Add more nested routes here */}
      </Route>
    </Routes>
  );
}

export default App;
