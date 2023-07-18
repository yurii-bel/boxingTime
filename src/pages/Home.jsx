import React from "react";

const Home = () => {
  return (
    <div className="relative mx-auto max-w-screen-xl m-2">
      <div className="absolute mix-blend-overlay  bg-gradient-to-r from-red-500 to-blue-500 w-full h-full"></div>
      <img src="boxingPic.jpg" alt="" />
      <div className="absolute top-0 left-0 w-full h-full flex gap-4 flex-col items-center justify-center">
        <h1 className="text-red-900 bg-gray-900/50 text-xl font-bold p-2 rounded-sm md:text-4xl">
          <span className="bg-white px-1 rounded-sm">Boxing</span>
          <span className="ml-1 text-blue-500">Time</span>
        </h1>
        <p className="text-white text-md bg-blue-900/50 px-1 rounded-sm md:text-xl md:px-2">
          Your Ultimate Source for Boxing Schedules and More!
        </p>
      </div>
    </div>
  );
};

export default Home;
