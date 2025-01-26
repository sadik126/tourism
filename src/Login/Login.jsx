import React, { useContext, useState } from "react";
import Navber2 from "../Navber/Navber2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/Authprovider";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../firebase.config";

const Login = () => {
  const [password, showsetPassword] = useState(false);
  const { signinUser, googlelogin } = useContext(AuthContext);

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const location = useLocation();
  const navigate = useNavigate();

  const googleLogin = () => {
    googlelogin(provider)
      .then((result) => {
        console.log(result);
        // sendEmailVerification(res).then(() =>
        //   toast.success("verification sent")
        // );
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        // ...
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("clicked");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signinUser(email, password)
      .then((res) => {
        console.log(res);
        navigate(location?.state ? location.state : "/");
      })
      .then((err) => console.log(err));
  };
  return (
    <div>
      <Navber2></Navber2>

      <h2 className="text-2xl text-center mt-[15rem] font-extrabold">
        Please login your account
      </h2>
      <form onSubmit={handleLogin} className="card-body lg:w-1/4 mx-auto">
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
        <div className="form-control  relative">
          <label className="label">
            <span className="label-text font-extrabold">Password</span>
          </label>
          <input
            type={password ? "text" : "password"}
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <span
            className="absolute top-[46%] md:left-[23.5rem] left-[17rem]"
            onClick={() => showsetPassword(!password)}
          >
            {password ? <FaEye /> : <FaEyeSlash />}
          </span>
          <label className="label">
            <a
              //   onClick={resetpassword}
              className="label-text-alt link link-hover"
            >
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 text-white">
            Login
          </button>
        </div>
      </form>
      <p className="text-center">
        Dont’t Have An Account?{" "}
        <Link className="text-red-700 font-extrabold" to="/register">
          Register
        </Link>{" "}
      </p>
      <div className="divider lg:w-1/4 w-1/2 mx-auto">OR</div>
      <div className="flex md:flex-row flex-col gap-3 justify-center lg:w-1/4 w-1/2 mx-auto">
        <button
          onClick={googleLogin}
          class="flex items-center sm:btn-sm md:btn-md lg:btn-lg bg-white dark:bg-gray-900 border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 dark:text-white hover:bg-black-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <svg
            class="h-6 w-6 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="800px"
            height="800px"
            viewBox="-0.5 0 48 48"
            version="1.1"
          >
            {" "}
            <title>Google-color</title> <desc>Created with Sketch.</desc>{" "}
            <defs> </defs>{" "}
            <g
              id="Icons"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              {" "}
              <g id="Color-" transform="translate(-401.000000, -860.000000)">
                {" "}
                <g id="Google" transform="translate(401.000000, 860.000000)">
                  {" "}
                  <path
                    d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                    id="Fill-1"
                    fill="#FBBC05"
                  >
                    {" "}
                  </path>{" "}
                  <path
                    d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                    id="Fill-2"
                    fill="#EB4335"
                  >
                    {" "}
                  </path>{" "}
                  <path
                    d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                    id="Fill-3"
                    fill="#34A853"
                  >
                    {" "}
                  </path>{" "}
                  <path
                    d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                    id="Fill-4"
                    fill="#4285F4"
                  >
                    {" "}
                  </path>{" "}
                </g>{" "}
              </g>{" "}
            </g>{" "}
          </svg>
          <span>Continue with Google</span>
        </button>

        <button
          //   onClick={handlefacebooklogin}
          type="button"
          class="text-white sm:btn-sm md:btn-md lg:btn-lg bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 "
        >
          <svg
            class="w-4 h-4 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 8 19"
          >
            <path
              fill-rule="evenodd"
              d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
              clip-rule="evenodd"
            />
          </svg>
          Sign in with Facebook
        </button>
        {/* <AwesomeButtonShare type="facebook">Facebook</AwesomeButtonShare> */}
      </div>
    </div>
  );
};

export default Login;
