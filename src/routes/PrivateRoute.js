/** @format */

import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({
  component: Component,
  isAunthenticated,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        isAunthenticated ? <Component {...props} /> : <Redirect to="/auth" />
      }
    />
  );
};
