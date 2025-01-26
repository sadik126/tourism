import React from "react";
import { Outlet } from "react-router-dom";
import Navber from "./Navber/Navber";
import Footer from "./Footer/Footer";

const Root = () => {
  return (
    <div className="font-Lato">
      {/* <div className="divider divider-neutral mt-10 max-w-[95rem] mx-auto"></div> */}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
