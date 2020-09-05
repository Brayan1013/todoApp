/** @format */

import { db } from "../firebase/firebase-config";
export const getAllNotesFirebase = async (id) => {
  const { docs } = await db.collection(`${id}/journal/notes`).get();
  const notes = [];
  docs.forEach((doc) => {
    notes.push({ id: doc.id, ...doc.data() });
  });
  return notes;
};
