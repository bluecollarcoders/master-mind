import React, { useEffect } from "react";
import { showAnswers } from "../utility/Utility";

const AnswerCard = ({ answers, gameEnds }) => {
  useEffect(() => {
    if (gameEnds) {
      showAnswers();
    }
  }, [gameEnds]);

  return (
    <div id="random-numbers" className="container">
      {answers.map((number, idx) => (
        <div key={idx} className="card container answer-card">
          <p className="random-number card-face front number">{number}</p>
          <p className="random-number card-face back number">?</p>
        </div>
      ))}
    </div>
  );
};

export default AnswerCard;
