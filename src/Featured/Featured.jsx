import React from "react";
import "./Featured.css";
import banner from "../assets/banner.jpg";

const Featured = () => {
  return (
    <div className="featured-item pt-8 relative bg-fixed bg-cover bg-center my-10 text-white">
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div>
          <h4 className="font-Satisfy text-3xl text-center">Perfect for You</h4>
          <h1 className="font-Lato font-extrabold text-6xl text-center">
            Top Destination
          </h1>
          <p className="my-5 text-white text-center px-16">
            Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis
            hendrerit a id lectus. Suspendissendt blandit interdum. Sed
            pellentesque at nunc eget consectetur.
          </p>
        </div>
        <div className="md:flex  justify-between items-center pb-20 pt-12 lg:px-36 px-6">
          <div className="md:w-1/2 w-full">
            <img src={banner} alt="" />
          </div>
          <div className="md:ml-10 md:w-1/2 w-full">
            <p className="font-Lato text-3xl">March 20, 2023</p>
            <p className="uppercase font-Lato text-gray-500 drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-cyan-500">
              WHERE CAN I GET SOME?
            </p>
            <p className="font-Satisfy">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              eius corporis hic eveniet molestiae expedita quibusdam, asperiores
              temporibus veniam laudantium ullam nulla officiis. Ex tempora
              magnam molestiae, perspiciatis voluptatem quasi repellendus
              dolorum officia! Quae sint accusantium, pariatur nihil totam
              accusamus possimus, velit animi, laudantium voluptas beatae
              officia quia laborum obcaecati.
            </p>
            <button className="btn btn-outline text-white border-0 border-b-4 mt-4">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
