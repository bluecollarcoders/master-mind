import React from "react";
import "../components/Button.css";
import { Link } from "react-router-dom";

export const Button = () => {
  return (
    <Link to="game">
      <button className="btn">Start Game</button>;
    </Link>
  );
};
