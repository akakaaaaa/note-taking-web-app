import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// 1. tags are changing design on hover. when clicked they need to displaay tag related notes depending on archived notes or regular notes
// 2. create contexts
