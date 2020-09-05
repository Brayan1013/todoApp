/** @format */

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "./Card";
import { useSelector } from "react-redux";

export const Cards = () => {
  const { notes } = useSelector((state) => state.notes);

  return (
    <div className="cards">
      {notes.map((note) => (
        <Card key={note.id} />
      ))}
    </div>
  );
};
