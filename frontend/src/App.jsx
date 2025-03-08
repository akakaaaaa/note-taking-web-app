import { useState } from "react";
import { Login } from "./pages/Login";
import "./styles/main.scss";
import { Register } from "./pages/Register";
import { Sidebar } from "./components/Sidebar";
import { Searchbar } from "./components/Searchbar";
import { Note } from "./components/Note";
import { NoteInnerTag } from "./components/NoteInnerTag";
import { AllNotesSidebar } from "./components/AllNotesSidebar";

{
  /* <Note
  active={false}
  title={"React Performance Optimization"}
  tags={["Dev", "React"]}
  edited_time={"29 Oct 2024"}
/>; */
}

const notes = [
  {
    active: true,
    title: "React Performance Optimization",
    tags: ["Dev", "React"],
    edited_time: "29 Oct 2024",
  },
  {
    active: false,
    title: "JavaScript Asynchronous Programming",
    tags: ["Dev", "JavaScript"],
    edited_time: "15 Nov 2024",
  },
  {
    active: false,
    title: "Node.js for Backend Development",
    tags: ["Dev", "Node.js"],
    edited_time: "5 Dec 2024",
  },
  {
    active: false,
    title: "CSS Grid and Flexbox",
    tags: ["Design", "CSS"],
    edited_time: "10 Oct 2024",
  },
  {
    active: false,
    title: "Database Optimization with SQL",
    tags: ["Dev", "SQL"],
    edited_time: "20 Nov 2024",
  },
  {
    active: false,
    title: "Version Control with Git",
    tags: ["Dev", "Git"],
    edited_time: "8 Dec 2024",
  },
  {
    active: false,
    title: "Agile Development Methodology",
    tags: ["Dev", "Agile"],
    edited_time: "18 Oct 2024",
  },
  {
    active: false,
    title: "Design Patterns in JavaScript",
    tags: ["Dev", "JavaScript", "Design Patterns"],
    edited_time: "22 Nov 2024",
  },
  {
    active: false,
    title: "Web Accessibility Best Practices",
    tags: ["Design", "Web Accessibility"],
    edited_time: "30 Oct 2024",
  },
  {
    active: false,
    title: "Testing with Jest in React",
    tags: ["Dev", "React", "Testing"],
    edited_time: "12 Nov 2024",
  },
];

function App() {
  return (
    <>
      <AllNotesSidebar notes={notes} />
    </>
  );
}

export default App;
