import Image from "next/image";
import Link from "next/link";
import React from "react";

function ClubGalleryCategory() {
  return (
    <div className="grid grid-cols-5 gap-5 mt-10">
      {Array(5)
        .fill(0)
        .map((_, index) => {
          return (
            <Link
              href={`/club/id/gallery/category/test`}
              className="text-center border pb-5"
            >
              <Image
                src="https://cdn.pixabay.com/photo/2023/11/08/04/30/girl-8373900_960_720.jpg"
                alt=""
                width={400}
                height={400}
                className="w-full h-40 object-cover"
              />
              <h1 className="text-xl font-bold mt-3">Category 1</h1>
              <p className="text-gray-500 text-sm">02/11/2024</p>
            </Link>
          );
        })}
    </div>
  );
}

export default ClubGalleryCategory;
