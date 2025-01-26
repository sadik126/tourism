import React, { useContext, useEffect, useState } from "react";
import logo from "../../src/assets/travel_logo-removebg-preview.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/Authprovider";

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handlescroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
  }, []);

  const handlesignout = () => {
    logOut();
  };
  return (
    <div className="max-w-6xl mx-auto">
      <div
        className={`navbar ${
          isScrolled ? "bg-white text-black" : "bg-transparent text-white"
        }  fixed top-0 left-0 z-50 `}
      >
        <div className="navbar-start md:w-[15%] w-1/2">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-5 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/allspots/all">All Tourists Spot</Link>
              </li>

              <li>
                <Link to="/addtourist">Add Tourists Spot</Link>
              </li>
              <li>
                <Link to="/mylist">My List</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl w-[70%]">
            <img className="w-1/2" src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-start hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/allspots/all">All Tourists Spot</Link>
            </li>

            <li>
              <Link to="/addtourist">Add Tourists Spot</Link>
            </li>
            <li>
              <Link to="/mylist">My List</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user && (
            <div
              className="avatar tooltip tooltip-bottom"
              data-tip={user?.displayName}
            >
              <div className="ring-primary tooltip ring-offset-base-100 w-8 rounded-full ring ring-offset-2">
                <img
                  src={
                    user?.photoURL ||
                    `https://imgs.search.brave.com/MCtUrIspl9afYrelvXbRUhMroowB5j3c8JdNj6zIkVs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2l0eXBuZy5jb20v/cHVibGljL3VwbG9h/ZHMvcHJldmlldy9w/cm9maWxlLXVzZXIt/cm91bmQtd2hpdGUt/aWNvbi1zeW1ib2wt/cG5nLTcwMTc1MTY5/NTAzMzQ5OWJycmJ1/ZWJvaGMucG5n`
                  }
                />
              </div>
              <span className="text-white">{}</span>
            </div>
          )}
          {user ? (
            <Link onClick={handlesignout} to="/login" className="btn m-5">
              Logout
            </Link>
          ) : (
            <>
              <Link to="/login" className="btn m-5">
                Login
              </Link>
              <Link to="/register" className="btn btn-info">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
