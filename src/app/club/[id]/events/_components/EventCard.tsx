import { CalendarCheck, Clock, LeafyGreen, MapPinCheck } from "lucide-react";
import Image from "next/image";
import React, { ReactNode } from "react";

function EventCard() {
  return (
    <div className="w-full p-3  rounded-xl overflow-hidden  bg-[#EBF3E8]">

      <div className=" py-1 px-0  flex justify-between">
        <h1 className="text-[#336940] font-semibold">Event 1</h1>
        <p className="font-light text-sm text-[#727970]">28 Jan 2025</p>
      </div>
      <div>
        <p className="text-sm text-[#727970]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet diam a ipsum ultricies ?</p>
      </div>
    </div>
  );
}

export default EventCard;

function TextList({ icon, text }: { icon: ReactNode; text: string }) {
  return (
    <div className=" flex justify-start items-center gap-3">
      {icon}
      <p className="text-xs">{text}</p>
    </div>
  );
}
