import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './pages/Home';



function App() {
  return (
    <Router forceRefresh={true}>
      <Header/>
        <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="*" element={<Home />} />
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
