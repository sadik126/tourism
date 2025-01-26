import React from "react";
import Usetourist from "../Usetourist/Usetourist";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Secondsection = () => {
  const [spots] = Usetourist();

  const bangladesh = spots.filter((bd) => bd.country === "Bangladesh");

  const uniqueCountriesWithImages = [
    ...new Map(
      spots.map((item) => [
        item.country,
        { country: item.country, img: item.img },
      ])
    ).values(),
  ];
  // console.log(uniqueCountriesWithImages);
  return (
    <div>
      <section className="mt-20 max-w-7xl mx-auto">
        <div className="flex items-center">
          <div>
            <h4 className="font-Satisfy text-3xl text-center">
              Perfect for You
            </h4>
            <h1 className="font-Lato font-extrabold text-6xl text-center">
              Top Destination
            </h1>
            <p className="my-5 text-gray-400 px-11">
              Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis
              hendrerit a id lectus. Suspendissendt blandit interdum. Sed
              pellentesque at nunc eget consectetur.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-3 justify-items-center">
          {uniqueCountriesWithImages.map((spot) => (
            <motion.div
              className=" bg-white shadow-lg rounded-2xl overflow-hidden h-80"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <Link
                to={`/allspots/${spot.country}`}
                className="card bg-base-100 image-full w-96 shadow-xl"
              >
                <figure>
                  <img src={spot.img} alt="Shoes" />
                </figure>
                <div className="card-body flex justify-center h-80">
                  <h2 className=" text-center md:text-3xl text-3xl  font-bold text-white-700   uppercase drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-cyan-500">
                    {spot.country}
                  </h2>
                  {/* <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div> */}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Secondsection;
