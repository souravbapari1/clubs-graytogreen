import { CalendarCheck, MapPinCheck } from "lucide-react";
import Image from "next/image";
import React from "react";
import EventCard from "./_components/EventCard";
import EventTabList from "./_components/EvenetTab";
import SearchEventBox from "./_components/SearchEventBox";

function page() {
  return (
    <div className="">
      <EventTabList />
      <div className="container">
        <br />
        <SearchEventBox />
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  md:gap-10 gap-5 mt-6">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
    </div>
  );
}

export default page;
