"use client"; // Mark this as a Client Component

import { CalendarCheck, MapPinCheck } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import EventCard from "./_components/EventCard";
import EventTabList from "./_components/EvenetTab";
import SearchEventBox from "./_components/SearchEventBox";
import Navigations from "../_components/Navigations";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import dayjs from "dayjs";

function page() {
  const defaultValue = dayjs("");
  const [selectedDate, setSelectedDate] = useState(defaultValue);
  const handleDateChange = (newDate: any) => {
    setSelectedDate(newDate);
    console.log("Selected Date:", newDate.format("YYYY-MM-DD"));
  };

  return (
    <div className="">
      <Navigations />
      {/* <EventTabList /> */}
      <div className="container">
        <br />
        <SearchEventBox />
        <div className="grid  pb-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1  md:gap-10 gap-5 mt-6">
      <div className="col-span-2">
      <div className="gap-5 grid grid-cols-2 ">
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
      </div>
          <div className="h-full col-span-1 ">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <StaticDatePicker
              onChange={handleDateChange}
                sx={{
                  backgroundColor: "#0000",
                  // width:'900px',
                  
                  // Change background color
                }}
                defaultValue={defaultValue}
              />
            </LocalizationProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
