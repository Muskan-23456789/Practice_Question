import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import DashBoard from "./Components/DashBoard";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<DashBoard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;