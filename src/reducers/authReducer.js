/** @format */

import { types } from "../types/Types";

const initialState = {
  uid: "",
  displayName: "",
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        uid: action.payload.uid,
        displayName: action.payload.displayName,
      };
    case types.logout: {
      return {};
    }
    default:
      return state;
  }
};
