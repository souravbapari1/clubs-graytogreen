import React from "react";

function Banner() {
  return (
    <div className="w-full max-h-[800px] md:h-[80vh] flex justify-end items-center py-6 pt-12 relative">
      <div className="2xl:w-[990px] lg:w-[850px] w-full md:h-[601px] h-[400px]  overflow-hidden lg:rounded-l-3xl bg-[url('https://s3-alpha-sig.figma.com/img/2280/f178/0944eeb0e1f4ade5f20c21c7075a6c44?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BNAKgphKpZTmAInZtGPDkcIr2QtFWNc--LnDypTHFdJvyWpl0ad5l2MMNOYii6FnASk8s~ucpg2HIlzVyfPqgX6VHSkvlBdmzms~cKxABhZsdEklLS1-m1fsb6N1sCvRDCbheB3iYnMybbvtnPqnsGxC2SNg4lIQ95cJFkrUzF~ugisfigT-W5mgkf4dtiYMGepAYTyshjlu-Ibc8CTLIaeZ-5~YkfV9LQDfEq5-RS71xfkJWhI3EbXQ4~wr8RWDztPMfLNHuwfJvjK7JBXX~7gK92be-YOoRvFMqw~~tBM9ypkWyd3peX8z94nLtBZegon-WOZp4CeqhOsC62vkEg__')] bg-no-repeat bg-cover"></div>
      <div className="max-w-[650px] w-full md:h-[340px] h-auto bg-[#336940B2]/70 border border-[#336940B2]/20 lg:backdrop-blur-3xl backdrop-blur-lg  absolute 2xl:right-[600px] lg:right-[380px] right-0 lg:left-auto left-0 mx-auto rounded-3xl md:rounded-b-3xl md:bottom-auto bottom-0 rounded-b-none p-8">
        <h1 className="md:text-5xl sm:text-3xl text-2xl text-white font-extralight">
          Explore and Connect with Environmental Clubs in Your Area
        </h1>
        <p className="text-white/80 mt-5 sm:text-base text-sm">
          Find clubs near you that are making a difference in sustainability and
          environmental awareness. Join like-minded individuals to take action
          for a greener future!
        </p>
      </div>
    </div>
  );
}

export default Banner;
