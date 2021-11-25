import React from "react";
import "../App.css";
import "../components/HeroSection.css";
import "../components/Button";
import { Button } from "../components/Button";

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="content">
        <h1>Master Mind</h1>
        <p>Guess the right 4 numbers To win</p>
        <Button />
      </div>
    </div>
  );
}

export default HeroSection;
