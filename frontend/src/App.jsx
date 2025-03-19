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
    content: `Key performance optimization techniques:\n\n1. Code Splitting\n- Use React.lazy() for route-based splitting\n- Implement dynamic imports for heavy components\n\n2. Memoization\n- useMemo for expensive calculations\n- useCallback for function props\n- React.memo for component optimization\n\n3. Virtual List Implementation\n- Use react-window for long lists\n- Implement infinite scrolling\n\nTODO: Benchmark current application and identify bottlenecks`,
  },
  {
    active: false,
    title: "JavaScript Asynchronous Programming",
    tags: ["Dev", "JavaScript"],
    edited_time: "15 Nov 2024",
    content:
      "Understanding asynchronous programming in JavaScript using callbacks, promises, and async/await. Master JavaScript's asynchronous nature with practical examples of callbacks, promises, and async/await.",
  },
  {
    active: false,
    title: "Node.js for Backend Development",
    tags: ["Dev", "Node.js"],
    edited_time: "5 Dec 2024",
    content:
      "Building scalable backend applications with Node.js, Express.js, and middleware integration. Learn how to create efficient and scalable server-side applications using Node.js.",
  },
  {
    active: false,
    title: "CSS Grid and Flexbox",
    tags: ["Design", "CSS"],
    edited_time: "10 Oct 2024",
    content:
      "Exploring CSS Grid and Flexbox for building responsive and flexible web layouts. Learn how to use CSS Grid and Flexbox effectively for modern web design.",
  },
  {
    active: false,
    title: "Database Optimization with SQL",
    tags: ["Dev", "SQL"],
    edited_time: "20 Nov 2024",
    content:
      "Techniques for optimizing SQL queries and database performance. Learn how to write efficient queries and improve database performance with indexing and normalization.",
  },
  {
    active: false,
    title: "Version Control with Git",
    tags: ["Dev", "Git"],
    edited_time: "8 Dec 2024",
    content:
      "Managing code versions and collaboration with Git and GitHub. Learn essential Git commands and workflows for better version control.",
  },
  {
    active: false,
    title: "Agile Development Methodology",
    tags: ["Dev", "Agile"],
    edited_time: "18 Oct 2024",
    content:
      "Understanding Agile principles and methodologies for software development. Learn how Agile development improves project management and teamwork.",
  },
  {
    active: false,
    title: "Design Patterns in JavaScript",
    tags: ["Dev", "JavaScript", "Design Patterns"],
    edited_time: "22 Nov 2024",
    content:
      "Exploring common design patterns in JavaScript to improve code maintainability. Learn how to apply design patterns like Singleton, Factory, and Observer in JavaScript projects.",
  },
  {
    active: false,
    title: "Web Accessibility Best Practices",
    tags: ["Design", "Web Accessibility"],
    edited_time: "30 Oct 2024",
    content:
      "Ensuring websites are accessible to all users, including those with disabilities. Learn how to implement ARIA roles, keyboard navigation, and color contrast for better accessibility.",
  },
  {
    active: false,
    title: "Testing with Jest in React",
    tags: ["Dev", "React", "Testing"],
    edited_time: "12 Nov 2024",
    content:
      "Writing unit and integration tests for React applications using Jest. Learn how to test React components and ensure code reliability with Jest and React Testing Library.",
  },
];

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
