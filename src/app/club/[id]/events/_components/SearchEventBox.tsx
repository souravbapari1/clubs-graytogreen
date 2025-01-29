import { Filter } from "lucide-react";
import React from "react";

function SearchEventBox() {
  return (
    <div className="w-full h-12 bg-[#F9F9F9] rounded-full flex justify-center items-center overflow-hidden p-2">
      <input
        type="text"
        placeholder="Search Events"
        className="w-full h-full bg-transparent px-10"
      />
      <div className="w-10 h-9 flex justify-center items-center  rounded-full">
        <Filter size={14} className="text-gray-500" />
      </div>
    </div>
  );
}

export default SearchEventBox;
