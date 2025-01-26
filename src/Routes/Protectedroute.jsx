import React, { useContext } from "react";
import { AuthContext } from "../Providers/Authprovider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Loading/Loading";

const Protectedroute = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default Protectedroute;
