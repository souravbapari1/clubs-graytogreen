import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="w-full h-96 bg-primary relative">
      <Image
        src="https://ascendingtree.wordpress.com/wp-content/uploads/2021/04/trees.jpg"
        width={5000}
        height={2000}
        alt="club"
        className="w-full h-full object-cover"
      />
      <div className="bg-white border-4 border-primary text-lg font-bold p-5 max-w-96 text-center absolute bottom-0 left-0 right-0 -mb-10 shadow-lg mx-auto">
        <p>Green Minds, Sustainable Actions</p>
      </div>
    </div>
  );
}

export default Header;
