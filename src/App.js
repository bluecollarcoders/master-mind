import React from "react";
import HeroSection from "./components/HeroSection";
import { BrowserRouter as Router } from "react-router-dom";
import Counter from "./components/Counter";

function App() {
  return (
    <Router>
      <div className="App">
        <HeroSection />
        <Counter />
      </div>
    </Router>
  );
}

export default App;
