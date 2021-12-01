import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import GamePage from "../pages/gamePage";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>

        <Route exact path="game">
          <GamePage />
        </Route>

        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default Routes;
