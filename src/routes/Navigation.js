import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import GamePage from "../pages/GamePage";
import "../App.css";

const Navigation = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="game" element={<GamePage />} />
      </Routes>
    </div>
  );
};

export default Navigation;
