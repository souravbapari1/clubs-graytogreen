import Banner from "@/components/layout/Banner";
import ClubCard from "@/components/layout/cards/ClubCard";
import ClubFilter from "@/components/layout/cards/ClubFilter";
import React from "react";

function page() {
  return (
    <div>
      <Banner />
      <div className="container">
        <ClubFilter />
        <div className="w-full text-lg font-bold mt-10 flex justify-between items-center">
          <h1 className="text-3xl">Clubs</h1>
          <h2>Total: 5</h2>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-8">
          <ClubCard />
          <ClubCard />
          <ClubCard />
          <ClubCard /> <ClubCard /> <ClubCard />
        </div>
      </div>
    </div>
  );
}

export default page;
