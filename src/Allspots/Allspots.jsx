import React, { useEffect, useState } from "react";
import Navber2 from "../Navber/Navber2";
import { useLoaderData, useParams } from "react-router-dom";
import Spot from "../Spot/Spot";
import Usetourist from "../Usetourist/Usetourist";
import Showcards from "../Showcards/Showcards";

const Allspots = () => {
  //   const spots = useLoaderData();
  const { Category } = useParams();
  // const categories = ["Bangladesh", "Thailand", "Indonasia"];
  // const initialcategory = categories.indexOf(Category);

  // console.log(initialcategory);

  const [spots] = Usetourist();

  // const thailand = spots.filter((bd) => bd.country === "Thailand");
  // const indonasia = spots.filter((bd) => bd.country === "Indonasia");

  const [sortciteria, setSortciteria] = useState("default");
  const [sortspots, setSortspots] = useState([]);
  const [allspots, setSpots] = useState([]);

  console.log(allspots);

  useEffect(() => {
    fetchdata(sortciteria);
    // setSortspots(filteredspots);
  }, [sortciteria]);

  const fetchdata = (sort) => {
    fetch(`http://localhost:6070/sort?sort=${sort}`)
      .then((res) => res.json())
      .then((data) => setSpots(data));
  };
  // console.log(spots);

  useEffect(() => {
    // Fetch the data from the JSON file
    fetch("http://localhost:6070/touristspot")
      .then((response) => response.json())
      .then((data) => {
        // Filter data based on the country
        const filteredspots = data.filter((bd) => bd.country === Category);
        setSpots(filteredspots);
      });
  }, [Category]);
  return (
    <div>
      <Navber2></Navber2>
      <h2 className="text-4xl text-center  font-extrabold uppercase drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-cyan-500">
        All Tourists Spot
      </h2>

      <section className="mt-16 max-w-7xl mx-auto">
        <div>
          <select
            className="select select-bordered w-full max-w-xs"
            onChange={(e) => setSortciteria(e.target.value)}
            value={sortciteria}
          >
            <option disabled selected>
              Choose your status
            </option>
            <option value="default">Default</option>
            <option value="ascending">Low to High</option>
            <option value="descending">High to Low</option>
          </select>
        </div>

        <div className="">
          {/* {sortspots.map((spot) => (
            <Spot key={spot._id} spot={spot}></Spot>
          ))} */}

          <Showcards
            items={allspots.length > 0 ? allspots : sortspots}
          ></Showcards>
        </div>
      </section>
    </div>
  );
};

export default Allspots;
