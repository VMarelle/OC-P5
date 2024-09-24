import React from "react";
import star from "../assets/images/star.svg";
import redStar from "../assets/images/Redstar.svg";

export default function Rating({ rating }) {
  const arr = [];
  let i = 0;

  for (i = 0; i < 5; i++) {
    if (i < rating) {
      arr.push(<img src={redStar} />);
    } else {
      arr.push(<img src={star} />);
    }
  }

  return arr;
}
