import React from "react";
import Navigations from "../_components/Navigations";

const brands = [
  {
    name: "Nike",
    imageUrl:
      "https://www.pocketful.in/blog/wp-content/uploads/2024/09/image-6-1024x576.png",
    url: "https://www.nike.com",
  },
  {
    name: "Adidas",
    imageUrl:
      "https://1000logos.net/wp-content/uploads/2016/10/Adidas-Logo.png",
    url: "https://www.adidas.com",
  },
  {
    name: "Puma",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/da/Puma_complete_logo.svg",
    url: "https://us.puma.com",
  },
  {
    name: "Reebok",
    imageUrl:
      "https://www.pngall.com/wp-content/uploads/8/Reebok-Logo-Transparent.png",
    url: "https://www.reebok.com",
  },
  {
    name: "Under Armour",
    imageUrl:
      "https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2020/03/11131547/unnamed.png",
    url: "https://www.underarmour.com",
  },
  {
    name: "New Balance",
    imageUrl:
      "https://download.logo.wine/logo/New_Balance/New_Balance-Logo.wine.png",
    url: "https://www.newbalance.com",
  },
  {
    name: "Asics",
    imageUrl: "https://www.finessewebtech.com//userpanel/images/ngo.png",
    url: "https://www.asics.com",
  },
  {
    name: "Vans",
    imageUrl:
      "https://parmaarth.org/public/uploads/all/ngo%20in%20varanasi.png",
    url: "https://www.vans.com",
  },
];

const ClubSponsors: React.FC = () => {
  return (
    <>
    
      <Navigations/>
    <main className="flex-grow container mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-[#336940]">
          Explore Our Featured Brands
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {brands.map((brand, index) => (
              // <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2  w-[300px] md:w-[800px] py-12 gap-9">
               <div
                  key={index}
                  className="flex flex-col items-center justify-start rounded-lg bg-[#EBF3E8]  border-[#DDE5DA] border-2  p-4  gap-4 transition-shadow"
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
            // </div>
        ))}
      </div>
    </main>
    
    
    </>
  );
};

export default ClubSponsors;
