import React from "react";
import { TbUsersGroup } from "react-icons/tb";

function page() {
  return (
    <div>
      <div className="container mt-10">
        <div className="grid grid-cols-5 gap-5">
          <div className="w-full h-56 bg-primary/15 border-2 border-primary/10 rounded-xl">
            <TbUsersGroup />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
