import React from "react";
import HeroSection from "./components/HeroSection";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <HeroSection />
      </div>
    </Router>
  );
}

export default App;
