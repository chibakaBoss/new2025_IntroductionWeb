import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IntroScreen from "./components/IntroScreen"
import InfoPage from "./components/InfoPage";
import Bye from "./components/Bye";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroScreen />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/bye" element={<Bye />} />
      </Routes>
    </Router>
  );
}

export default App;