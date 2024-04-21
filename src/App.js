import { Routes, Route } from "react-router-dom";
import NoPage from "./components/NoPage/NoPage";
import Home from "./components/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
}

export default App;
