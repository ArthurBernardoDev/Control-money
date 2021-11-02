import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path={"/"} component={Home} exact />
      </Switch>
    </Router>
  );
};

export default Routes;
