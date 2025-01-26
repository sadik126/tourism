import React from "react";
import banner1 from "../../src/assets/plane-banner.jpg";
import banner2 from "../../src/assets/entrance-to-an-ancient-town.jpg";
import banner3 from "../../src/assets/banner 4.webp";

const Banner = () => {
  return (
    <>
      <div className="carousel w-full h-[60rem]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={banner1} className="w-full" />

          <div class="absolute inset-0 bg-gradient-to-r from-[#2a2a2b] to-[#111111] opacity-90"></div>

          <div class="absolute inset-0 flex justify-center items-center">
            <div class="text-center text-white">
              <div className="absolute inset-0 divider divider-info top-[81px] w-[70%] mx-auto"></div>
              <div className="md:flex flex-none md:w-3/4 w-full mx-auto">
                <div className="md:w-[60%] w-full">
                  <h2 class="md:text-6xl text-3xl font-extrabold">
                    Escape To{" "}
                    <span className="drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-cyan-500">
                      {" "}
                      Thailand
                    </span>
                  </h2>
                  <br />
                  <h2 class="md:text-6xl text-3xl text-cyan-600 font-extrabold uppercase drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-gray-500">
                    luxurious and modern Tour Services.
                  </h2>
                </div>
                <div className="md:w-[40%] w-full">
                  <p class="mt-4 px-16">
                    Tourism is the travel and exploration of destinations for
                    leisure, adventure, or cultural experiences. It boosts
                    economies, promotes cultural exchange, and creates global
                    connections. Travelers seek natural wonders, historic sites,
                    and vibrant cities, enriching their lives with new
                    perspectives. Sustainable tourism emphasizes protecting
                    ecosystems and respecting local traditions, ensuring these
                    treasures remain for future generations to enjoy.
                  </p>
                  <div>
                    <button className="btn btn-ghost sm:btn-sm md:btn-md lg:btn-lg">
                      About more
                    </button>
                    <button className="btn btn-outline btn-info sm:btn-sm md:btn-md lg:btn-lg m-5">
                      Explore me
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={banner2} className="w-full" />

          <div class="absolute inset-0 bg-gradient-to-r from-[#2a2a2b] to-[#0f0f0f] opacity-90"></div>

          <div class="absolute inset-0 flex justify-center items-center">
            <div class="text-center text-white">
              <div className="absolute inset-0 divider divider-info top-[81px] w-[70%] mx-auto"></div>
              <div className="md:flex flex-none md:w-3/4 w-full mx-auto">
                <div className="md:w-[60%] w-full">
                  <h2 class="md:text-6xl text-3xl font-extrabold">
                    Escape To{" "}
                    <span className="drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-green-500">
                      {" "}
                      Bangladesh
                    </span>{" "}
                  </h2>
                  <br />
                  <h2 class="md:text-6xl text-3xl text-green-600 font-extrabold uppercase drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-gray-500">
                    luxurious and modern Tour Services.
                  </h2>
                </div>
                <div className="md:w-[40%] w-full">
                  <p class="mt-4 px-16">
                    Tourism is the travel and exploration of destinations for
                    leisure, adventure, or cultural experiences. It boosts
                    economies, promotes cultural exchange, and creates global
                    connections. Travelers seek natural wonders, historic sites,
                    and vibrant cities, enriching their lives with new
                    perspectives. Sustainable tourism emphasizes protecting
                    ecosystems and respecting local traditions, ensuring these
                    treasures remain for future generations to enjoy.
                  </p>
                  <div>
                    <button className="btn btn-ghost sm:btn-sm md:btn-md lg:btn-lg">
                      About more
                    </button>
                    <button className="btn btn-outline btn-success sm:btn-sm md:btn-md lg:btn-lg m-5">
                      Explore me
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={banner3} className="w-full" />

          <div class="absolute inset-0 bg-gradient-to-r from-[#2a2a2b] to-[#383838] opacity-90"></div>

          <div class="absolute inset-0 flex justify-center items-center">
            <div class="text-center text-white">
              <div className="absolute inset-0 divider divider-info top-[81px] w-[70%] mx-auto"></div>
              <div className="md:flex flex-none md:w-3/4 w-full mx-auto">
                <div className="md:w-[60%] w-full">
                  <h2 class="md:text-6xl text-3xl font-extrabold">
                    Escape To{" "}
                    <span className="drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-red-500">
                      {" "}
                      Malaysia
                    </span>
                  </h2>
                  <br />
                  <h2 class="md:text-6xl text-3xl text-red-600 font-extrabold uppercase drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-gray-500">
                    luxurious and modern Tour Services.
                  </h2>
                </div>
                <div className="md:w-[40%] w-full">
                  <p class="mt-4 px-16">
                    Tourism is the travel and exploration of destinations for
                    leisure, adventure, or cultural experiences. It boosts
                    economies, promotes cultural exchange, and creates global
                    connections. Travelers seek natural wonders, historic sites,
                    and vibrant cities, enriching their lives with new
                    perspectives. Sustainable tourism emphasizes protecting
                    ecosystems and respecting local traditions, ensuring these
                    treasures remain for future generations to enjoy.
                  </p>
                  <div>
                    <button className="btn btn-ghost sm:btn-sm md:btn-md lg:btn-lg">
                      About more
                    </button>
                    <button className="btn btn-outline btn-error sm:btn-sm md:btn-md lg:btn-lg m-5">
                      Explore me
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
