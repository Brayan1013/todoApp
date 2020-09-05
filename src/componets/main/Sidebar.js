/** @format */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutFirebase } from "../../actions/authActions";
import { Cards } from "./Cards";
import { createNewNote } from "../../actions/notesActions";
import { getAllNotes } from "../../actions/notesActions";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const { displayName, uid } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logoutFirebase());
  };

  useEffect(() => {
    dispatch(getAllNotes());
  }, [uid, dispatch]);

  const handleClick = () => {
    dispatch(createNewNote());
  };
  return (
    <div className="sidebar">
      <div className="nav-container">
        <div className="button-logout">
          <button onClick={handleLogout}>Logout</button>
        </div>
        <p>
          <i className="fas fa-moon"></i> {displayName}
        </p>
      </div>
      <div className="add-task">
        <i onClick={handleClick} className="fas fa-calendar-plus fa-10x"></i>
        <h1>Add a new Task</h1>
      </div>
      <Cards />
    </div>
  );
};
