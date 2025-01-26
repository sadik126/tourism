import React from "react";

const Rightsidenav = ({ spot }) => {
  return (
    <div className="text-center">
      <h1 class="md:text-3xl text-3xl text-red-600 font-extrabold uppercase drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-gray-500">
        {spot.country}
      </h1>

      <p className="mt-10 font-extrabold">Location: {spot.location}</p>
      <p className="my-2 font-extrabold">Average Cost: {spot.average} BDT</p>
      <p className={`my-2 font-extrabold `}>
        Seasonality:{" "}
        <span
          className={` uppercase ${
            spot.seasonality === "winter" ? "text-blue-600 " : "text-red-500 "
          }`}
        >
          {spot.seasonality === "winter" ? "Winter 🥶" : "Summer 🔥"}
        </span>
      </p>
      <p className="my-2 font-extrabold text-5xl">{spot.travel_time} Days</p>
      <p className="my-2 font-extrabold text-pretty">
        Travelled Person :{spot.visit} Peoples
      </p>
    </div>
  );
};

export default Rightsidenav;
