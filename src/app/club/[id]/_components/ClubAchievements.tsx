import Image from "next/image";
import React from "react";

function ClubAchievements() {
  return (
    <div className="container py-20">
      <h1 className="text-3xl">Club Achievements</h1>
      <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
        {Array.from({ length: 4 }).map((_, id) => {
          return (
            <div className="" key={id}>
              <div className="w-full h-96 bg-primary/10 rounded-xl overflow-hidden">
                <div className="h-52 w-full relative">
                  <Image
                    src="https://plus.unsplash.com/premium_photo-1675824592773-10ef8da4ade3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z3JlZW4lMjBmb3Jlc3R8ZW58MHx8MHx8fDA%3D"
                    alt=""
                    width={1000}
                    height={1000}
                    className="h-52 object-cover w-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-full text-white flex justify-center items-center p-10 text-center bg-gradient-to-t from-black/30 to-black/60">
                    <h1 className="text-2xl font-bold">
                      Recycled Over 10 Tons of Waste
                    </h1>
                  </div>
                </div>
                <p className="text-center  p-5">
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
