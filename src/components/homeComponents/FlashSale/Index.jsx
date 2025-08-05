import React from "react";
import Heading from "../../commonComponent/Heading";
import Timer from "../../commonComponent/Timer";

const FlashSale = () => {
  return (
    <div>
      <div className="grid grid-cols-4 items-end">
        <Heading title={"Today’s"} description={"Flash Sales"} />
        <Timer />
      </div>
    </div>
  );
};

export default FlashSale;
