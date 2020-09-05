/** @format */

import { db } from "../firebase/firebase-config";
import { types } from "../types/Types";
import { getAllNotesFirebase } from "../helpers/getAllNotes";

export const createNewNote = () => {
  return async (dispatch, getState) => {
    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const { uid } = getState().auth;
    const ref = await db.collection(`${uid}/journal/notes`).add(newNote);
    console.log(ref);
    dispatch(addNewNoteState(ref.id, newNote));
  };
};

export const addNewNoteState = (id, note) => ({
  type: types.newNote,
  payload: {
    id,
    ...note,
  },
});

export const getAllNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const notes = await getAllNotesFirebase(uid);
    dispatch(updateStateWithAllNotes(notes));
  };
};

export const updateStateWithAllNotes = (notes) => ({
  type: types.getAllNotes,
  payload: [...notes],
});
