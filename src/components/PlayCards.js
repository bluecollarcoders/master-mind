import React from "react";

const PlayCards = ({ playerGuesses, currentGuess }) => {
  return (
    <div id="players-guesses" className="container">
      {playerGuesses.map((number, idx) => {
        <p
          id={idx}
          key={idx}
          className={`player-guess number ${
            idx <= currentGuess ? "grow" : "shrink"
          }`}
        >
          {number}
        </p>;
      })}
    </div>
  );
};

export default PlayCards;
