import React from "react";

function Banner() {
  return (
    <div className="w-full max-h-screen  h-[450px] bg-[url('/assets/banner.png')] bg-no-repeat bg-center bg-cover relative">
      <div className="absolute w-full bg-green-800/60  h-full bottom-0 left-0">
        <div className="container flex justify-center items-center flex-col h-full">
          <h1 className="text-center font-extrabold md:text-5xl text-2xl text-white max-w-[900px]">
            Explore and Connect with Environmental Clubs in Your Area
          </h1>
          <p className="text-center  md:text-lg text-sm font-bold  text-white/90 md:mt-10 mt-5 max-w-[700px]">
            Find clubs near you that are making a difference in sustainability
            and environmental awareness. Join like-minded individuals to take
            action for a greener future!
          </p>
        </div>
      </div>
      <div className="absolute w-full bg-white rounded-t-[100%] h-20 bottom-0 right-0"></div>
    </div>
  );
}

export default Banner;
