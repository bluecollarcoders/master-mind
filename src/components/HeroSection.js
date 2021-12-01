import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../components/HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="content">
        <h1>Master Mind</h1>
        <p>
          Guess the right 4 numbers To win
          <Link className="btn btn-dark" to="/game">
            start game
          </Link>
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
