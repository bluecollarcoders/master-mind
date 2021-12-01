import React from "react";

const Keypad = ({ keypadLength, lockPad, handleClick }) => {
  const numbers = [];

  for (let i = 0; i <= keypadLength; i++) {
    numbers.push(
      <button
        key={i}
        disabled={lockPad}
        onClick={() => handleClick(i)}
        className="keyboard-number number"
      >
        {i}
      </button>
    );
  }
  return (
    <div
      id="keypad"
      style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
      className="keys container"
    >
      {numbers}
    </div>
  );
};

export default Keypad;
