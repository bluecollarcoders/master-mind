import React from "react";
import { Routes, Navigate, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import GamePage from "../pages/GamePage";

const Navigation = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="game" element={<GamePage />} />
      </Routes>
    </div>
  );
};

export default Navigation;
