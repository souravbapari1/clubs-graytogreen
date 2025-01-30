import Image from "next/image";
import React from "react";
import ClubSocialLink from "../gallery/_components/ClubSocialLink";

function ClubAchievements() {
  return (
    <div className="container flex flex-col justify-center items-center py-20">
      <h1 className="text-3xl">Club Achievements</h1>
      <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
        {Array.from({ length: 8 }).map((_, id) => {
          return (
            <div key={id}>
              <div className="w-full h-auto bg-[#EBF3E8]  p-3 flex-col flex gap-4 border border-[#DDE5DA]/10 rounded-xl overflow-hidden">
                <div className="h-36  rounded-xl object-cover  overflow-hidden w-full relative ">
                  <Image
                    src="https://plus.unsplash.com/premium_photo-1675824592773-10ef8da4ade3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z3JlZW4lMjBmb3Jlc3R8ZW58MHx8MHx8fDA%3D"
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-full text-white flex justify-center items-center p-10 text-center bg-gradient-to-t from-black/30 to-black/60">
                    <h1 className="text-xl font-bold">
                      Recycled Over 10 Tons of Waste
                    </h1>
                  </div>
                </div>
                <p className=" px-2 text-sm text-left text-[#727970] ">
                  Organized community-wide recycling initiatives, diverting
                  waste from landfills and promoting sustainable waste
                  management.
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ClubAchievements;
