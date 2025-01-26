import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navber2 from "../Navber/Navber2";
import { AuthContext } from "../Providers/Authprovider";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";

const Signup = () => {
  const { createUser } = useContext(AuthContext);

  const handleregister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const img = form.img.value;
    const newuser = { name, email, password, img };
    console.log(name, email, password, img);
    createUser(email, password)
      .then((res) => {
        // console.log(res.user);
        updateProfile(res.user, {
          displayName: name,
          photoURL: img,
        });

        fetch(`http://localhost:6070/users`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newuser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              toast.success("Successfully account created!", {
                style: { backgroundColor: "green", color: "white" },
              });
              form.reset();
            }
          });
      })
      .catch((error) => {
        console.error(error.message);

        if (error.message == "Firebase: Error (auth/email-already-in-use).") {
          toast.error(
            "This email is already in use! please try another email",
            {
              style: { backgroundColor: "red", color: "white" },
            }
          );
        }
      });
  };
  return (
    <div>
      <Navber2></Navber2>
      <h2 className="text-4xl text-center mt-[15rem] font-extrabold uppercase drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-cyan-500">
        Please sign up your account
      </h2>
      <form onSubmit={handleregister} className="card-body lg:w-1/4 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-extrabold">Name</span>
          </label>

          <input
            type="text"
            placeholder="name"
            name="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-extrabold">Email address</span>
          </label>

          <input
            type="email"
            placeholder="email"
            name="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-extrabold">Password</span>
          </label>

          <input
            type="password"
            name="password"
            placeholder="password"
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
          <button className="btn text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Sign up
          </button>
        </div>
      </form>
      <p className="text-center">
        Already Have An Account?{" "}
        <Link className="text-red-700 font-extrabold" to="/login">
          Login here
        </Link>{" "}
      </p>
    </div>
  );
};

export default Signup;
