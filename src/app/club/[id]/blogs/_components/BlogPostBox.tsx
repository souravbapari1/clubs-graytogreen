import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import React from "react";

function BlogPostBox() {
  return (
    <div
      key={1}
      className="flex flex-col items-center justify-start rounded-lg bg-[#EBF3E8]  border-[#DDE5DA] border-2  p-4 p  gap-4 transition-shadow"
    >
      <div className="w-full  overflow-hidden h-[150px] flex  rounded-lg bg-white">
        <img
          src={"https://images.pexels.com/photos/724994/pexels-photo-724994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
          alt={"BlogImage"}
          className="h-full 
          w-full  object-cover mb-4 "
        />
      </div>
      <div className=" flex justify-between items-center w-full ">

      <p className="text-[#727970] text-sm font-medium">01 Jan 2025</p>
      <p className="text-[#727970] bg-[#F6FFF2] p-1 rounded-full  text-center text-sm font-medium">Planting</p>
      </div>

      <div>
        <h1 className="  text-2xl">The Power Of Brain to Adapt </h1>
        <p className="text-[#727970]">Explore the concept of collaboration and its impact on productivity.</p>
      </div>
    </div>
  );
}

export default BlogPostBox;
