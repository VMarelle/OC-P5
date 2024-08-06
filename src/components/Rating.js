import React from "react";
import star from "../assets/star.png";
import redStar from "../assets/starRed.png";

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
