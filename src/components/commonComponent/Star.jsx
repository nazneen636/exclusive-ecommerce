import React from "react";
import { icons } from "../../helpers/iconProvider";

const Star = ({ rating = 0 }) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    if (rating >= index + 1) {
      return <span className="text-yellow-500 text-xl">{icons.fullStar}</span>;
    } else if (rating >= index + 0.5) {
      return <span className="text-yellow-500 text-xl">{icons.halfStar}</span>;
    } else {
      return <span className="text-yellow-500 text-xl">{icons.blankStar}</span>;
    }
  });
  return <div className="flex items-center gap-x-1">{stars}</div>;
};

export default Star;
