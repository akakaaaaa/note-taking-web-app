import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// 1. fix sidebar all notes and archived notes button, when refreshed state not defaults.
// 2. finish archive page
// 3. in sidebar when tags are pressed code needs to filter notes depending on selected tag
