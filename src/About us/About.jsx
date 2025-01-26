import React from "react";
import image1 from "../../src/assets/bali-8838762_1280.jpg";
import image2 from "../../src/assets/lake-8357182_1280.jpg";
const About = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen my-14">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2 relative">
            <img src={image1} className="w-[87%] rounded-lg shadow-2xl" />

            <img
              src={image2}
              className="w-3/4 absolute right-2 top-40 rounded-lg shadow-2xl"
            />
          </div>

          <div className="lg:w-1/2 text-center space-y-5 mt-32">
            <h3 className="text-xl font-Satisfy">About us</h3>
            <h1 className="md:text-7xl text-3xl  font-bold text-blue-700 text-4xl text-center  font-extrabold uppercase drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-cyan-500">
              Explore more Traveling experince and lavish lifestyle
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>

            <p className="py-6">
              Exploring a lavish lifestyle through travel includes visiting
              luxury destinations like private islands and exotic resorts,
              enjoying first-class or private jet travel, and engaging in
              exclusive activities such as private tours, yacht charters, or
              luxury cruises. These experiences offer unparalleled comfort,
              convenience, and personalized service.
            </p>
            <button className="btn btn-outline btn-info sm:btn-sm md:btn-md lg:btn-lg m-5">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
