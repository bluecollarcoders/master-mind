import React, { useState, Fragment } from "react";
import "../components/FirstScreen.css";
import { GAME_INSTRUCTIONS } from "../utility/Utility";

const FirstScreen = ({ show }) => {
  const [showInstructions, setShowInstructions] = useState(false);
  const toggleShowInstructions = () => setShowInstructions((show) => !show);
  return (
    <div
      id="overlay"
      style={{ display: show ? "display" : "none" }}
      className="overlay-default"
    >
      <div id="home-screen" className="overlay-content-container">
        <div className="overlay-content animated hide fadeInUp">
          <h1 className="game-title start-screen">Master Mind</h1>
        </div>
      </div>
      <footer
        id="instructions"
        className={`instructions ${showInstructions ? "slideUp" : ""}`}
      >
        <button onClick={toggleShowInstructions} className="txt-intructions">
          Instructions
        </button>

        <ul
          className={`instructions-list ${
            !showInstructions ? "toggle-display" : ""
          }`}
        >
          {GAME_INSTRUCTIONS.map((instruction, i) => (
            <Fragment key={i}>
              <li>{instruction}</li>
            </Fragment>
          ))}
        </ul>
      </footer>
    </div>
  );
};

export default FirstScreen;
