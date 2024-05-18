import { HashRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/Main/scrollToTop.js";
import LandingPage from "./Pages/Main/landing_page.js";
import TestPage from "./Pages/Main/login.js";

function App() {
  return (
    <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/test_page" element={<TestPage />} />
        </Routes>
    </HashRouter>
  );
}

export default App;
