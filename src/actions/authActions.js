/** @format */

import { types } from "../types/Types";
import { firebase } from "../firebase/firebase-config";

export const loginWithEmailAndPassword = (email, password) => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        dispatch(login(user.uid, user.displayName));
      })
      .catch((e) => console.log(e));
  };
};

export const createWithEmailAndPassword = (email, password, name) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });
        dispatch(login(user.uid, user.displayName));
      })
      .catch((e) => console.log(e));
  };
};

export const logoutFirebase = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signOut()
      .then((response) => {
        dispatch(logout());
      })
      .catch((e) => console.log(e));
  };
};

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});

export const logout = () => ({
  type: types.logout,
});
