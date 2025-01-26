import React, { useContext, useEffect, useState } from "react";
import Navber2 from "../Navber/Navber2";
import { AuthContext } from "../Providers/Authprovider";
import Allmylist from "./Allmylist";

const Mylist = () => {
  const [alllist, setallList] = useState([]);
  const { user, logOut } = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:6070/touristspot")
      .then((res) => res.json())
      .then((data) => {
        if (user.email) {
          const newList = data.filter((spot) => spot.email === user.email);
          setallList(newList);
        }
      });
  }, []);

  return (
    <div>
      <Navber2></Navber2>
      <section className="mt-16 max-w-7xl mx-auto">
        <h2 className="text-4xl text-center  font-extrabold uppercase drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-cyan-500">
          My List{" "}
        </h2>
        {alllist.length === 0 ? (
          <h1 className="text-4xl text-center  font-extrabold uppercase drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-cyan-500">
            {" "}
            NO DATA FOUND
          </h1>
        ) : (
          <div className="grid md:grid-cols-1 gap-3 justify-items-center mt-28">
            {alllist.map((spot) => (
              <Allmylist spot={spot} key={spot._id}></Allmylist>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Mylist;
