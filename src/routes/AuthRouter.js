/** @format */

import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { LoginScreen } from "../componets/auth/LoginScreen";
import { RegisterScreen } from "../componets/auth/RegisterScreen";

export const AuthRouter = ({ match }) => {
  return (
    <div>
      <Switch>
        <Route path={match.url + "/login"} component={LoginScreen} />
        <Route path={match.url + "/register"} component={RegisterScreen} />
        <Redirect to={match.url + "/login"} />
      </Switch>
    </div>
  );
};
