import React, { useEffect, useState } from "react";
import Spot from "../Spot/Spot";
import Usetourist from "../Usetourist/Usetourist";

const Firstsection = () => {
  // const [spots, setSpots] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:6070/touristspot")
  //     .then((res) => res.json())
  //     .then((data) => setSpots(data));
  // }, []);
  const [spots] = Usetourist();
  return (
    <div>
      <section className="mt-16 max-w-7xl mx-auto">
        <div className="flex items-center">
          <div>
            <h4 className="font-Satisfy text-3xl">Perfect for You</h4>
            <h1 className="font-Lato font-extrabold text-6xl">
              Popular Tour Package
            </h1>
            <p className="my-5 text-gray-400">
              Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis
              hendrerit a id lectus. Suspendissendt blandit interdum. Sed
              pellentesque at nunc eget consectetur.
            </p>
          </div>

          <button class="btn btn-success">Explore</button>
        </div>

        <div className="grid md:grid-cols-3 gap-3 justify-items-center">
          {spots.map((spot) => (
            <Spot key={spot._id} spot={spot}></Spot>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Firstsection;
