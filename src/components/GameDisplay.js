import React, { useState, useEffect } from "react";
// import from api
import { masterMindApi } from "../api/masterMindApi";
// import utility
import { attempts, answerCheck } from "../utility/Utility";
// import Components
import AnswerCard from "./AnswerCard";
import PlayCards from "./PlayCards";
import PlayerHistory from "./PlayerHistory";
import Counter from "./Counter";
import Keypad from "./Keypad";
import Loader from "./Loader";
import GameEnds from "./GameEnds";
import ShowScreen from "./ShowScreen";


const PLAYER_GUESS_DEFAULT = ["-", "-", "-", "-"];

const GameDisplay = ({ goToStartScreen }) => {
  const [answers, setAnswers] = useState([]);
  const [playerGuesses, setPlayerGuesses] = useState(PLAYER_GUESS_DEFAULT);
  const [playerGuessIndex, setPlayerGuessIndex] = useState(0);
  const [playerAttempts, setPlayerAttempts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lockGameBoard, setLockGameBoard] = useState(true);
  const [playerResult, setPlayerResult] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [timerOn, setTimerOn] = useState(true);
  const [showAttemptResults, setShowAttemptResults] = useState(false);

  let timeout;
  const clearTimer = () => {
    console.log("clearing out timer", timeout);
    clearTimeout(timeout);
  };

  // Fetching data from api

  useEffect(() => {
    const getData = async () => {
      const randomNumbers = await masterMindApi();
      setAnswers(randomNumbers);
      setLockGameBoard(false);
      setIsLoading(false);
    };
    if (isLoading) {
      getData();
      setTimerOn(true);
    }
  }, [isLoading]);

  // Player makes all guesses in time
  useEffect(() => {
    if (setPlayerGuessIndex === 4) {
      if (timerOn) {
        clearTimer();
        setTimerOn(false);
        handleGuesses();
      }
      setLockGameBoard(true);
    }
  }, [playerGuessIndex]);

  // Timer is done and player hasn't finished picking numbers
  useEffect(() => {
    if (!timerOn && playerGuessIndex !== 4) {
      setLockGameBoard(true);
      handleGuesses();
    }
  }, [timerOn]);

  //   Timer is on
  useEffect(() => {
    if (timerOn) {
      timeout = setTimeout(() => {
        if (!gameOver) {
          setTimerOn(false);
        }
      }, [timerOn]);
    }
  });

  //   Game is over

  useEffect(() => {
    if (gameOver) {
      clearTimer();
      if (playerAttempts.length >= 10) {
        setTimeout(() => {
          setPlayerResult("lose");
        }, 3000);
      } else {
        setTimeout(() => {
          setPlayerResult("win");
        }, 3000);
      }
    }
  }, [gameOver, playerAttempts]);

  const handleNewGame = () => {
    const RESET_GUESSES = ["-", "-", "-", "-"];
    setPlayerGuesses(RESET_GUESSES);
    setPlayerGuessIndex(0);
    setPlayerAttempts([]);
    setGameOver(false);
    setIsLoading(true);
    setPlayerResult(null);
    clearTimer();
    goToStartScreen();
  };

  const startNewAttempt = () => {
    const RESET_GUESSES = ["-", "-", "-", "-"];

    setPlayerGuesses(RESET_GUESSES);
    setPlayerGuessIndex(0);
    setLockGameBoard(false);

    clearTimer();
    setTimerOn(true);
    setShowAttemptResults(false);
  };

  const handleClick = (number) => {
    const tempGuesses = playerGuesses;
    tempGuesses[playerGuessIndex] = number;
    setPlayerGuesses(tempGuesses);
    setPlayerGuessIndex(playerGuessIndex + 1);
  };

  const handleGuesses = () => {
    if (answerCheck(answers, playerGuesses)) {
      setGameOver(true);
    } else {
      updateUserAttempts(playerGuesses);

      if (playerAttempts.length >= 9) {
        setGameOver(true);
        return;
      }
      setShowAttemptResults(true);
    }
  };

  const updateUserAttempts = (currentAttemptValues) => {
    const attemptData = attempts(answers, currentAttemptValues);
    console.log({ attemptData, playerAttempts });
    setPlayerAttempts((trys) => [...trys, attemptData]);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {/* <!-- Overlay --> */}
      {playerResult && gameOver && (
        <GameEnds
          playerWin={playerResult === "win"}
          playerScore={playerAttempts.length}
          playNewGame={handleNewGame}
        />
      )}

      {showAttemptResults && playerAttempts.length && !gameOver && (
        <ShowScreen
          guesses={playerAttempts[playerAttempts.length - 1].values}
          existing={playerAttempts[playerAttempts.length - 1].exist}
          matches={playerAttempts[playerAttempts.length - 1].location}
          handleClick={startNewAttempt}
          handleReset={handleNewGame}
        />
      )}
      {/* <!-- /Overlay --> */}

      <div id="game-container" className="game-container container">
        {/* <!-- Header --> */}
        <section
          className={`header ${answers.length ? "animated fadeInUp" : "hide"}`}
        >
          <h1 className="game-title">MASTER MIND</h1>

          <div className="attempts-container container">
            <h3>
              Attempts Left:{" "}
              <span id="attempts-left">{`${
                10 - playerAttempts.length > 0 ? 10 - playerAttempts.length : 0
              }`}</span>
            </h3>
          </div>
        </section>
        {/* <!-- /Header --> */}

        {/* <!-- Gameboard --> */}
        <section
          id="gameboard"
          className={`container ${
            answers.length ? "animated fadeInUp" : "hide"
          }`}
        >
          {answers.length && (
            <AnswerCard answers={answers} gameEnds={gameOver} />
          )}
          {answers.length && (
            <PlayCards
              playerGuesses={playerGuesses}
              currentGuess={playerGuessIndex}
            />
          )}
        </section>
        {/* <!-- /Gameboard --> */}

        {/* <!-- Player History --> */}
        <section
          id="history"
          className={`container ${
            answers.length ? "animated fadeInUp" : "hide"
          }`}
        >
          {answers.length && <PlayerHistory attempts={playerAttempts} />}
        </section>
        {/* <!-- /Player History --> */}

        {/* <!-- Timer --> */}
        <section
          id="timer"
          className={`container ${
            answers.length ? "animated fadeInUp" : "hide"
          }`}
        >
          <Counter />
        </section>
        {/* <!-- /Timer --> */}

        {/* <!-- Keyboard --> */}
        <section
          className={`keyboard-container ${
            answers.length ? "animated fadeInUp" : "hide"
          }`}
        >
          <h3 className="keyboard-header">GUESS THE CODE ABOVE</h3>
          <Keypad
            lockPad={lockGameBoard}
            keypadLength={}
            handleClick={handleClick}
          />
        </section>
        {/* <!-- Keyboard --> */}
      </div>
    </>
  );
};

export default GameDisplay;
