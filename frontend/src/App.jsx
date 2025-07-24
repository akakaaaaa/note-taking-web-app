import "./styles/main.scss";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Archive } from "./pages/Archive";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/Archive" element={<Archive />} />
      </Route>
    </Routes>
  );
}

export default App;
