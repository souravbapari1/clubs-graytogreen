import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import ClubSocialLink from "../gallery/_components/ClubSocialLink";

function AboutAndJoin({CardVisible,IsImageCenter}:any) {
  return (
    <div className="bg-white w-full ">
      <div className=" w-full p-5 py-0  lg:pr-0 ">
        <div className={`w-full  grid lg:grid-cols-2 gap-10 ${IsImageCenter?'pr-10':'pr-0'}`}>
          <div className="w-[86%] p-5 md:p-0 flex flex-col justify-center items-start">
            <h1 className="text-[21px] md:text-[36px] font-light text-[#336940]">
              Growing Green Minds: Empowering Sustainability for a Better
              Tomorrow
            </h1>
            <p className="mt-5 text-[#727970] w-full md:w-[80%] text-[15px] md:text-[19px] font-light leading-[21px]">
              It is a green initiative to spread environmental awareness in
              schools and environmental communities. The club has contributed to
              sustainability practices by sorting and recycling waste,
              encouraging agriculture, and saving energy. The club has
              contributed to sustainability practices by sorting and recycling
              waste, encouraging agriculture, and saving energy.
            </p>
            <button className="text-[16px] p-2 mt-[20px] w-[150px] rounded-full border-[#727970] border">
              <p className="text-[#336940]">Join us Now</p>

            </button>
              <ClubSocialLink />

           
          </div>
          <div className={`w-full  md:h-[80vh] flex ${IsImageCenter?'justify-center':'justify-end'}  items-center px-0 py-6 pt-12 relative`}>
            <div className={`2xl:w-[990px] lg:w-[850px] w-full md:h-[451px] h-[400px]  overflow-hidden ${IsImageCenter?'rounded-xl' :'lg:rounded-l-3xl'} bg-[url('https://s3-alpha-sig.figma.com/img/2280/f178/0944eeb0e1f4ade5f20c21c7075a6c44?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BNAKgphKpZTmAInZtGPDkcIr2QtFWNc--LnDypTHFdJvyWpl0ad5l2MMNOYii6FnASk8s~ucpg2HIlzVyfPqgX6VHSkvlBdmzms~cKxABhZsdEklLS1-m1fsb6N1sCvRDCbheB3iYnMybbvtnPqnsGxC2SNg4lIQ95cJFkrUzF~ugisfigT-W5mgkf4dtiYMGepAYTyshjlu-Ibc8CTLIaeZ-5~YkfV9LQDfEq5-RS71xfkJWhI3EbXQ4~wr8RWDztPMfLNHuwfJvjK7JBXX~7gK92be-YOoRvFMqw~~tBM9ypkWyd3peX8z94nLtBZegon-WOZp4CeqhOsC62vkEg__')] bg-no-repeat bg-cover`}>
            
            </div>


           { CardVisible ? <div className="md:max-w-[400px] w-full md:h-auto  h-auto bg-[#336940B2]/70 border border-[#336940B2]/20 lg:backdrop-blur-3xl backdrop-blur-lg  absolute 2xl:right-[600px] lg:right-[380px] right-0 lg:left-auto left-0 mx-auto rounded-3xl md:rounded-b-3xl md:bottom-auto bottom-0 rounded-b-none p-8">
              <h1 className=" text-[16px] text-white font-extralight">
                Explore and Connect with Environmental Clubs in Your Area
              </h1>

              <span className="flex">
                <p className="text-[#B5F1BC] font-medium">240+ Members</p>
                <h2 className="text-white">  actively participating.</h2>
              </span>
            </div>:""}
          </div>  
        </div>
      </div>
    </div>
  );
}

export default AboutAndJoin;
