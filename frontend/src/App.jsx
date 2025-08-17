import "./styles/main.scss";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Archive } from "./pages/Archive";
import { SearchPage } from "./pages/SearchPage";
import { TagsPage } from "./pages/TagsPage";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";

function App() {
  return (
    <Routes>
      {/* Public auth pages */}
      <Route path="Signin" element={<Login />} />
      <Route path="Signup" element={<Register />} />

      {/* Pages with sidebar/layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Archive" element={<Archive />} />
        <Route path="Search" element={<SearchPage />} />
        <Route path="Tags" element={<TagsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
