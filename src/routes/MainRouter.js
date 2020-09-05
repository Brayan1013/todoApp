/** @format */

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { HomeScreen } from "../componets/main/HomeScreen";
import { AuthRouter } from "./AuthRouter";
import { firebase } from "../firebase/firebase-config";
import { useDispatch } from "react-redux";
import { login } from "../actions/authActions";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRouter } from "./PublicRouter";

export const MainRouter = () => {
  const dispatch = useDispatch();
  const [check, setCheck] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((response) => {
      if (response) {
        dispatch(login(response.uid, response.displayName));
        setIsAuthenticated(true);
      }

      if (!response) {
        setIsAuthenticated(false);
      }
      setCheck(false);
    });
  }, [dispatch, isAuthenticated]);

  if (check) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <Router>
        <Switch>
          <PrivateRoute
            exact
            path="/"
            isAunthenticated={isAuthenticated}
            component={HomeScreen}
          />
          <PublicRouter
            path="/auth"
            isAuthenticated={isAuthenticated}
            component={AuthRouter}
          />
          {/* <Redirect to="/auth" /> */}
        </Switch>
      </Router>
    </>
  );
};
