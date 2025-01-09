import React from "react";

function page() {
  return (
    <div className="container mt-10">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 md:col-span-4 flex flex-col gap-4 w-full bg-gray-200 rounded-3xl h-[80vh] p-3">
          <div className="w-full h-60 bg-gray-50 rounded-2xl"></div>
          <div className="w-full h-60 bg-gray-50 rounded-2xl"></div>
        </div>
        <div className="col-span-12 md:col-span-8   w-full bg-gray-200 rounded-3xl h-[80vh] p-2">
          <div className="w-full h-full bg-gray-50 rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
}

export default page;
