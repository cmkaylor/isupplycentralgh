import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './pages/Home';
import About from "./pages/About";



function App() {
  return (
    <Router forceRefresh={true}>
      <Header/>
        <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="*" element={<Home />} />
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
