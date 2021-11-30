import React from "react";
import HeroSection from "./components/HeroSection";
import { BrowserRouter as Router } from "react-router-dom";
import Counter from "./components/Counter";
import FirstScreen from "./components/FirstScreen";
import ShowScreen from "./components/ShowScreen";
import AnswerCard from "./components/AnswerCard";

function App() {
  return (
    <Router>
      <div className="App">
        <HeroSection />
        {/* <Counter /> */}
        <AnswerCard />
      </div>
    </Router>
  );
}

export default App;
