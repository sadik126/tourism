import React, { useContext } from "react";
import Navber2 from "../Navber/Navber2";
import { AuthContext } from "../Providers/Authprovider";
import toast from "react-hot-toast";

const Addtourist = () => {
  const { user } = useContext(AuthContext);
  const handleaddtourists = (e) => {
    e.preventDefault();

    const form = e.target;

    const tourist_name = form.tourist_spot.value;
    const country = form.country.value;
    const location = form.location.value;
    const description = form.description.value;
    const average = form.average.value;
    const seasonality = form.seasonality.value;
    const travel_time = form.Travel_time.value;
    const visit = form.visit.value;
    const img = form.img.value;
    const email = user.email;
    const name = user.displayName;

    const tourist = {
      tourist_name,
      country,
      location,
      description,
      average,
      seasonality,
      travel_time,
      visit,
      img,
      email,
      name,
    };

    console.log(tourist);

    fetch("http://localhost:6070/addtourist", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(tourist),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Successfully tourist spot added!", {
            style: { backgroundColor: "green", color: "white" },
          });
          form.reset();
        }
      });
  };
  return (
    <div>
      <Navber2></Navber2>

      <h2 className="text-4xl text-center  font-extrabold uppercase drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-cyan-500">
        Please Add Your Tourists Spot
      </h2>
      <form onSubmit={handleaddtourists} className="card-body lg:w-1/4 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-extrabold">Tourist Spot Name</span>
          </label>

          <input
            type="text"
            placeholder="name"
            name="tourist_spot"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-extrabold">Country Name</span>
          </label>

          <input
            type="text"
            placeholder="name"
            name="country"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-extrabold">Location</span>
          </label>

          <input
            type="text"
            placeholder="location"
            name="location"
            className="input input-bordered"
            required
          />
        </div>

        <label className="form-control">
          <div className="label">
            <span className="label-text font-extrabold">Short Description</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Bio"
            name="description"
          ></textarea>
        </label>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-extrabold">Average cost</span>
          </label>

          <input
            type="text"
            placeholder="average cost"
            name="average"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-extrabold">Seasonality</span>
          </label>

          <select className="select w-full max-w-xs" name="seasonality">
            <option disabled selected>
              Pick your favorite Season
            </option>
            <option name="summer" value="summer">
              Summer
            </option>
            <option name="winter" value="winter">
              Winter
            </option>
          </select>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-extrabold">
              Choose Travel time
            </span>
          </label>

          <label className="label cursor-pointer">
            <span className="label-text">7 days</span>
            <input
              type="radio"
              name="Travel_time"
              value="7"
              className="radio checked:bg-red-500"
              defaultChecked
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">15 days</span>
            <input
              type="radio"
              name="Travel_time"
              value="15"
              className="radio checked:bg-blue-500"
              defaultChecked
            />
          </label>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-extrabold">
              Total visitor per year
            </span>
          </label>

          <input
            type="number"
            placeholder="visit"
            name="visit"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-extrabold">Image</span>
          </label>
          <input
            type="text"
            name="img"
            className="input input-bordered"
            placeholder="Image link"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn text-gray-900 bg-gradient-to-r from-blue-200 via-cyan-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Add tourist spot
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addtourist;
