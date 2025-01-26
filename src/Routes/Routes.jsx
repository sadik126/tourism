import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import Addtourist from "../Addtourist/Addtourist";
import Protectedroute from "./Protectedroute";
import Errorelement from "../Errorelement/Errorelement";
import Semiprotected from "./Semiprotected";
import Allspots from "../Allspots/Allspots";
import Mylist from "../Mylist/Mylist";
import Spotdetails from "../Spotdetails/Spotdetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorelement></Errorelement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: (
          <Semiprotected>
            <Login></Login>
          </Semiprotected>
        ),
      },
      {
        path: "/register",
        element: (
          <Semiprotected>
            <Signup></Signup>
          </Semiprotected>
        ),
      },
      {
        path: "/addtourist",
        element: (
          <Protectedroute>
            <Addtourist></Addtourist>
          </Protectedroute>
        ),
      },
      {
        path: "/allspots/:Category",
        element: <Allspots></Allspots>,
        // loader: () => fetch("http://localhost:6070/touristspot"),
      },
      {
        path: "/spot/:id",
        element: <Spotdetails></Spotdetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:6070/spot/${params.id}`),
      },
      {
        path: "/mylist",
        element: (
          <Protectedroute>
            <Mylist></Mylist>
          </Protectedroute>
        ),
      },
    ],
  },
]);

export default router;
