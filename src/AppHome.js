/** @format */

import React from "react";
import { MainRouter } from "./routes/MainRouter";
import { Provider } from "react-redux";
import { store } from "./store/store";

export const AppHome = () => {
  return (
    <Provider store={store}>
      <MainRouter />
    </Provider>
  );
};
