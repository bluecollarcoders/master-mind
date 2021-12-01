import React from "react";

const PLAYER_WIN = "rgba(159, 230, 159, .9)";
const PLAYER_LOSE = "rgba(228, 117, 122, .9)";

const GameEnds = ({ playerWin = false, playerScore = null, playNewGame }) => {
  const WinHeader = playerScore ? (
    <>
      <h1 className="txt-win txt-results">{playerScore} attempts</h1>
    </>
  ) : (
    <h1 className="txt-win txt-results">You Won</h1>
  );
  return (
    <div
      id="overlay"
      className="overlay-game-over"
      style={{ backgroundColor: playerWin ? PLAYER_WIN : PLAYER_LOSE }}
    >
      <div className="overlay-content-container">
        <div className="overlay-content">
          {playerWin ? (
            WinHeader
          ) : (
            <h1 className="txt-lose txt-results">You Lose!</h1>
          )}

          <button
            id="btn-game-over"
            onClick={playNewGame}
            className="btn reset"
          >
            Retry
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameEnds;
