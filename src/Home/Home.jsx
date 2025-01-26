import React from "react";
import Banner from "../Banner/Banner";
import Navber from "../Navber/Navber";
import Firstsection from "../Firstsection/Firstsection";
import Secondsection from "../Secondsection/Secondsection";
import About from "../About us/About";
import Featured from "../Featured/Featured";

const Home = () => {
  return (
    <div>
      <Navber></Navber>
      <Banner></Banner>
      <Firstsection></Firstsection>
      <Secondsection></Secondsection>
      <About></About>
      <Featured></Featured>
    </div>
  );
};

export default Home;
