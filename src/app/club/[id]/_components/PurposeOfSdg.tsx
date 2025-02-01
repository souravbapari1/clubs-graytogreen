import React from "react";

const brands = [
  {
    para: "Address inequalities and ensure that no one is left behind in development efforts.",
    imageUrl:
      "/assets/Vector.svg",
    url: "https://www.nike.com",
  },
  {
    para: "Address inequalities and ensure that no one is left behind in development efforts",
    imageUrl:
      "/assets/Vector.svg",
    url: "https://www.adidas.com",
  },
  {
    para: "Address inequalities and ensure that no one is left behind in development efforts.",
    imageUrl:
      "/assets/Vector.svg",
    url: "https://us.puma.com",
  },
  {
    para: "Address inequalities and ensure that no one is left behind in development efforts.",
    imageUrl:
      "/assets/Vector.svg",
    url: "https://www.reebok.com",
  },
  {
    para: "Address inequalities and ensure that no one is left behind in development efforts.",
    imageUrl:
      "/assets/Vector.svg",
    url: "https://www.reebok.com",
  },
  {
    para: "Address inequalities and ensure that no one is left behind in development efforts.",
    imageUrl:
      "/assets/Vector.svg",
    url: "https://www.reebok.com",
  },
];
const PurposeOfSdg = () => {
  return (
    <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 border-[#DDE5DA] md:w-[90%] py-12 gap-9">
      {brands.map((brand, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-start rounded-lg bg-[#EBF3E8] border-2 border-[#DDE5DA]   p-4  gap-4 "
        >
          <div className="w-full  flex justify-center items-center rounded-lg ">
          <img
            src={brand.imageUrl}
            alt={brand.para}
            className="w-1/2 h-14 object-contain mb-4 "
          />
          </div>
          <p className=" text-[#336940] text-sm font-medium">{brand.para}</p>
        </div>
      ))}
    </div>
  );
};

export default PurposeOfSdg;
