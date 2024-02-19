import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import Home from './pages/Home';



function App() {
  return (
    <Router>
        <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="*" element={<Home />} />
        </Routes>
    </Router>
  );
}

export default App;
