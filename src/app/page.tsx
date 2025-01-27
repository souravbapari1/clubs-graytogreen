import Banner from "@/components/layout/Banner";
import ClubCard from "@/components/layout/cards/ClubCard";
import ClubFilter from "@/components/layout/cards/ClubFilter";
import React from "react";

import { Goal, Home, ImagePlay, LucideGraduationCap, MapPinned, NotebookPen, PartyPopper, UsersIcon } from "lucide-react";

function page() {
// import { useParams } from "next/navigation";

  return (
    <div>
      
      <Banner />
      <div className="container">
        <div className="w-full text-lg font-bold my-10 flex justify-center items-center">
          <h1 className="text-3xl font-medium">Clubs</h1>
        </div>
        <ClubFilter />

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-8">
          {Array.from({ length: 8 }).map((data, index) => (
            <ClubCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
