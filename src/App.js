import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./components/NoPage/NoPage";
import Home from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
