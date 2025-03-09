import "./styles/Home.scss";
import { Sidebar } from "../components/Sidebar";
import { Searchbar } from "../components/Searchbar";
import { Note } from "../components/Note";
import { NoteInnerTag } from "../components/NoteInnerTag";
import { AllNotesSidebar } from "../components/AllNotesSidebar";
import { NoteDetails } from "../components/NoteDetails";
import { RightSidebar } from "../components/RightSidebar";
import { useState } from "react";

const notes = [
  {
    id: 1,
    active: true,
    title: "React Performance Optimization",
    tags: ["Dev", "React"],
    edited_time: "29 Oct 2024",
    content: `Key performance optimization techniques:\n\n1. Code Splitting\n- Use React.lazy() for route-based splitting\n- Implement dynamic imports for heavy components\n\n2. Memoization\n- useMemo for expensive calculations\n- useCallback for function props\n- React.memo for component optimization\n\n3. Virtual List Implementation\n- Use react-window for long lists\n- Implement infinite scrolling\n\nTODO: Benchmark current application and identify bottlenecks`,
  },
  {
    id: 2,
    active: false,
    title: "JavaScript Asynchronous Programming",
    tags: ["Dev", "JavaScript"],
    edited_time: "15 Nov 2024",
    content:
      "Understanding asynchronous programming in JavaScript using callbacks, promises, and async/await. Master JavaScript's asynchronous nature with practical examples of callbacks, promises, and async/await.",
  },
  {
    id: 3,
    active: false,
    title: "Node.js for Backend Development",
    tags: ["Dev", "Node.js"],
    edited_time: "5 Dec 2024",
    content:
      "Building scalable backend applications with Node.js, Express.js, and middleware integration. Learn how to create efficient and scalable server-side applications using Node.js.",
  },
  {
    id: 4,
    active: false,
    title: "CSS Grid and Flexbox",
    tags: ["Design", "CSS"],
    edited_time: "10 Oct 2024",
    content:
      "Exploring CSS Grid and Flexbox for building responsive and flexible web layouts. Learn how to use CSS Grid and Flexbox effectively for modern web design.",
  },
  {
    id: 5,
    active: false,
    title: "Database Optimization with SQL",
    tags: ["Dev", "SQL"],
    edited_time: "20 Nov 2024",
    content:
      "Techniques for optimizing SQL queries and database performance. Learn how to write efficient queries and improve database performance with indexing and normalization.",
  },
  {
    id: 6,
    active: false,
    title: "Version Control with Git",
    tags: ["Dev", "Git"],
    edited_time: "8 Dec 2024",
    content:
      "Managing code versions and collaboration with Git and GitHub. Learn essential Git commands and workflows for better version control.",
  },
  {
    id: 7,
    active: false,
    title: "Agile Development Methodology",
    tags: ["Dev", "Agile"],
    edited_time: "18 Oct 2024",
    content:
      "Understanding Agile principles and methodologies for software development. Learn how Agile development improves project management and teamwork.",
  },
  {
    id: 8,
    active: false,
    title: "Design Patterns in JavaScript",
    tags: ["Dev", "JavaScript", "Design Patterns"],
    edited_time: "22 Nov 2024",
    content:
      "Exploring common design patterns in JavaScript to improve code maintainability. Learn how to apply design patterns like Singleton, Factory, and Observer in JavaScript projects.",
  },
  {
    id: 9,
    active: false,
    title: "Web Accessibility Best Practices",
    tags: ["Design", "Web Accessibility"],
    edited_time: "30 Oct 2024",
    content:
      "Ensuring websites are accessible to all users, including those with disabilities. Learn how to implement ARIA roles, keyboard navigation, and color contrast for better accessibility.",
  },
  {
    id: 10,
    active: false,
    title: "Testing with Jest in React",
    tags: ["Dev", "React", "Testing"],
    edited_time: "12 Nov 2024",
    content:
      "Writing unit and integration tests for React applications using Jest. Learn how to test React components and ensure code reliability with Jest and React Testing Library.",
  },
];

const allTags = [];
notes.forEach((note) => allTags.push(...note.tags));
const uniqueTags = [...new Set(allTags)];

export const Home = () => {
  const [selectedNote, setSelectedNote] = useState(notes[0]);

  return (
    <div className="homepage">
      <Sidebar tags={uniqueTags} />
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
        <NoteDetails note={selectedNote} />
      </div>
      <div className="rightsidebar">
        <RightSidebar />
      </div>
    </div>
  );
};
