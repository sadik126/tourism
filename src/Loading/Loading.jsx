import React from "react";
import { RingLoader } from "react-spinners";

const Loading = () => {
  return (
    <div class="flex justify-center items-center h-screen bg-gray-100">
      <RingLoader
        color={"cyan"}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
