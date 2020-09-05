/** @format */
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { authReducer } from "../reducers/authReducer";
import thunk from "redux-thunk";
import { notesRedudecer } from "../reducers/notesReducer";
const rootReducer = combineReducers({
  auth: authReducer,
  notes: notesRedudecer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
