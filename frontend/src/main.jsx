import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// 1. tags are changing design on click. for archive and home page i have to do separate notes, then i have to filter notes depending on specific tag
// 2. create contexts
