import React from "react";

function BlogCategory() {
  return (
    <div className="flex justify-center items-center gap-5 flex-wrap">
      <p className="text-lg bg-[#336940] text-white px-6 rounded-full py-2 cursor-pointer select-none font-medium">
        All
      </p>
      {
        ["Plants","Events","Sustainability","Environment","Green"].map((data,index)=>(
          <p
          key={index}
          className="text-lg bg-[#F4FCF0] text-[#414941] font-light px-6 rounded-full py-2 cursor-pointer select-none ">
          {data}
        </p>
        ))
      }
   
    </div>
  );
}

export default BlogCategory;
