import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googlelogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const signinUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("user", currentuser);
      setUser(currentuser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const userInfo = {
    user,
    createUser,
    loading,
    signinUser,
    logOut,
    googlelogin,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default Authprovider;
