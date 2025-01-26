import React from "react";

const Allmylist = ({ spot }) => {
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="h-[486px]">
          <img src={spot.img} className="w-[30rem]" alt="Album" />
        </figure>
        <div className="card-body w-[80%]">
          <h2 className="card-title text-4xl text-center  font-extrabold uppercase drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-cyan-500">
            {spot.tourist_name}
          </h2>
          <p>{spot.description}</p>
          <p>{spot.average}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">{spot.country}</button>
            <button className="btn btn-secondary">{spot.location}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allmylist;
