/** @format */

import React from "react";
import { Form } from "./Form";
import { Sidebar } from "./Sidebar";
import { Nothing } from "./Nothing";
import { useSelector } from "react-redux";

export const HomeScreen = () => {
  const { activeNote } = useSelector((state) => state.notes);
  return (
    <>
      <div className="home-container">
        <Sidebar />
        {activeNote ? <Form /> : <Nothing />}
      </div>
    </>
  );
};
