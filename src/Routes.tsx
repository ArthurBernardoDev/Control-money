import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import SignIn from "./components/SignIn/SignIn";

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path={"/"} component={Home} exact />
        <Route path={"/signin"} component={SignIn} exact />
      </Switch>
    </Router>
  );
};

export default Routes;
