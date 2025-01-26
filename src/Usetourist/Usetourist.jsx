import React, { useEffect, useState } from "react";

const Usetourist = () => {
  const [spots, setSpots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:6070/touristspot")
      .then((res) => res.json())
      .then((data) => {
        setSpots(data);
        setLoading(false);
      });
  }, []);
  return [spots, loading];
};

export default Usetourist;
