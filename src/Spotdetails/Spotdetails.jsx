import React from "react";
import Navber2 from "../Navber/Navber2";
import { useLoaderData } from "react-router-dom";
import Rightsidenav from "./Rightsidenav";

const Spotdetails = () => {
  const spot = useLoaderData();
  const {
    tourist_name,
    average,
    visit,
    seasonality,
    travel_time,
    img,
    description,
  } = spot;
  console.log(spot);
  return (
    <div>
      <Navber2></Navber2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-16 max-w-7xl mx-auto">
        <div className="col-span-1 md:col-span-3">
          <div
            className="hero min-h-96"
            style={{
              backgroundImage: `url(${img})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold font-Satisfy">
                  {tourist_name}
                </h1>
              </div>
            </div>
          </div>
          <div className="divider divider-neutral md:text-6xl text-3xl text-cyan-600 font-extrabold uppercase drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-gray-500 mt-16">
            Details
          </div>

          <p className="my-10">
            {" "}
            <span className="text-primary font-bold ">Description</span> :{" "}
            {description}
          </p>
        </div>
        <div>
          <Rightsidenav spot={spot}></Rightsidenav>
        </div>
      </div>
    </div>
  );
};

export default Spotdetails;
