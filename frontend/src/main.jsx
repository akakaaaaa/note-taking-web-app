import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./store/userContext";

createRoot(document.getElementById("root")).render(
  <UserProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserProvider>
);

// user context is created, tags are dynamic
// 1. i have to fix navigation bug about selecting pages using navbar in mobile & tablet versions. depending on location.pathname
// 2. i have to make search bar dynamic, so it filteres notes.
