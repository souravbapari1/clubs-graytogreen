import React from "react";

const brands = [
  {
    name: "Address inequalities and ensure that no one is left behind in development efforts.",
    imageUrl:
      "https://logo-icons.com/cdn/shop/files/2009-logo-1713622638.985color-003932.svg?v=1713641114&width=1445",
    url: "https://www.nike.com",
  },
  {
    name: "Address inequalities and ensure that no one is left behind in development efforts",
    imageUrl:
      "https://logo-icons.com/cdn/shop/files/2009-logo-1713622638.985color-003932.svg?v=1713641114&width=1445",
    url: "https://www.adidas.com",
  },
  {
    name: "Address inequalities and ensure that no one is left behind in development efforts.",
    imageUrl:
      "https://logo-icons.com/cdn/shop/files/2009-logo-1713622638.985color-003932.svg?v=1713641114&width=1445",
    url: "https://us.puma.com",
  },
  {
    name: "Address inequalities and ensure that no one is left behind in development efforts.",
    imageUrl:
      "https://logo-icons.com/cdn/shop/files/2009-logo-1713622638.985color-003932.svg?v=1713641114&width=1445",
    url: "https://www.reebok.com",
  },
];
const PurposeOfSdg = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2  w-[300px] md:w-[800px] py-12 gap-9">
      {brands.map((brand, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-start rounded-lg bg-[#DDE5DA] border-2 border-[#DDE5DA]   p-4  gap-4 transition-shadow"
        >
          <div className="w-full h-full flex justify-center items-center rounded-lg bg-white">
          <img
            src={brand.imageUrl}
            alt={brand.name}
            className="w-1/2 h-1/2 object-contain mb-4 "
          />
          </div>
          <p className="text-gray-700 text-sm font-medium">{brand.name}</p>
        </div>
      ))}
    </div>
  );
};

export default PurposeOfSdg;
