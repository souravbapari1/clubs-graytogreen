import Image from "next/image";
import Link from "next/link";
import React from "react";

function ClubGalleryCategory() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5  gap-5 mt-10">
      {Array(5)
        .fill(0)
        .map((_, index) => {
          return (
            <Link
              href={`/club/id/gallery/category/test`}
              className=""
            >
              <div
                  key={index}
                  className="flex flex-col items-center justify-start rounded-lg bg-[#EBF3E8]  border-[#DDE5DA]/10 border-2  p-3  gap-4 transition-shadow"
                >
                  <div className="w-full overflow-hidden h-32 flex justify-center items-center rounded-lg bg-white">
                  <img
                    src={"https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/hero-banner-2x.jpeg&w=3840&q=75"}
                    alt={"brand.name"}
                    className="w-full h-full object-cover  "
                  />
                  </div>
                  <div>

                  <h1 className="text-gray-700 text-base text-center font-semibold ">Category One</h1>
                  <p className="text-gray-700 text-base text-center  ">27/04/2024</p>
                  </div>
                </div>
            </Link>
          );
        })}
    </div>
  );
}

export default ClubGalleryCategory;
