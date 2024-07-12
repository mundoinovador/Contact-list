import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import AboutMe from "../page/About";

function RouterManager() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterManager;
