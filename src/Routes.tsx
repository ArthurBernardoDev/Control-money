import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import SignIn from "./pages/SignIn/SignIn";
import Dashboard from "./pages/Dashboard/dashboard";

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path={"/"} component={Home} exact />
        <Route path={"/signin"} component={SignIn} exact />
        <Route path={"/register"} component={Register} exact />
          <Route path={"/dashboard"} component={Dashboard} exact />
      </Switch>
    </Router>
  );
};

export default Routes;
