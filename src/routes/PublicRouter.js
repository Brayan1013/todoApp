/** @format */

import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PublicRouter = ({
  component: Component,
  isAuthenticated,
  ...rest
}) => {
  return (
    <div>
      <Route
        {...rest}
        component={(props) =>
          isAuthenticated ? <Redirect to="/" /> : <Component {...props} />
        }
      />
    </div>
  );
};
