import React from "react";
import "./Slider.css";
import leftArrow from "../../images/Icons/left-arrow.svg";
import rightArrow from "../../images/Icons/right-arrow.svg";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}