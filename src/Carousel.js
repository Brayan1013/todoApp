/** @format */

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Card } from "./componets/main/Card";

export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="carousel-container ">
      <h2> Single Item</h2>
      <Slider {...settings}>
        <Card />
        <Card />
        <Card />
        <Card />
      </Slider>
    </div>
  );
};
