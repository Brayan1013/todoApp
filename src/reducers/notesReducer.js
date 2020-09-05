/** @format */

import { types } from "../types/Types";

const initialState = {
  notes: [],
  activeNote: null,
};
export const notesRedudecer = (state = initialState, action) => {
  switch (action.type) {
    case types.newNote:
      return {
        ...state,
        activeNote: {
          ...action.payload,
        },
      };
    case types.getAllNotes:
      return {
        ...state,
        notes: [...action.payload],
      };
    default:
      return state;
  }
};
