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

// 1. have to make search page for mobile and tablet versions.
