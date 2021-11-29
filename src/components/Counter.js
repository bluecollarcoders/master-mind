import React, { useState, useEffect } from "react";
import "../components/Counter.css";

const Counter = () => {
  const [counter, setCounter] = useState(15);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);
  return (
    <div>
      <p className="display-bar">{counter}</p>
    </div>
  );
};

export default Counter;
