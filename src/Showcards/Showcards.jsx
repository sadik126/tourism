import React from "react";
import Spot from "../Spot/Spot";

const Showcards = ({ items }) => {
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-3 justify-items-center mt-28">
        {items.map((spot) => (
          <Spot key={spot._id} spot={spot}></Spot>
        ))}
      </div>
    </div>
  );
};

export default Showcards;
