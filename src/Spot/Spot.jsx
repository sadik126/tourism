import React from "react";
import { Link } from "react-router-dom";

const Spot = ({ spot }) => {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl ">
        <figure>
          <img className="h-64" src={spot.img} alt="Shoes" />
          <div
            className="badge badge-neutral absolute  text-white font-bold py-4 px-6 rounded-lg 
                transform translate-y-20 transition-transform duration-500 hover:translate-y-0"
          >
            Travel time : {spot.travel_time} Days
          </div>
        </figure>

        <div className="card-body">
          <h2 className="card-title text-4xl text-center  font-extrabold uppercase drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-cyan-500">
            {spot.tourist_name}
          </h2>
          <p>Price:{spot.average} BDT</p>
          <p>Visit peaople : {spot.visit}</p>
          <p>Seasonality : {spot.seasonality}</p>
          <div className="card-actions justify-end">
            {/* <button className="btn btn-primary">View Details</button> */}
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                <Link to={`/spot/${spot._id}`}>View details</Link>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spot;
