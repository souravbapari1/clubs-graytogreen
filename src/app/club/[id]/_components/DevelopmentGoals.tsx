"use client";
import React, { useState } from "react";

function DevelopmentGoals() {
  const sustainabilityGoals = [
    {
      tab: "No Poverty",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxWxYQKiF5gBdyyITOz8AV7HYO2tNCUIHGaw&s",
      content: `
       End poverty in all its forms everywhere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor hendrerit sem sed tempus. Vivamus.

      `,
      heading: "No Poverty:",
    },
    {
      tab: "Zero Hunger",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Sustainable_Development_Goal_02ZeroHunger.svg/1200px-Sustainable_Development_Goal_02ZeroHunger.svg.png",
      content: `
      Zero Hunger: End hunger, achieve food security, and promote sustainable agriculture. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor hendrerit sem sed tempus. Vivamus.
      `,
      heading: "Zero Hunger:",
    },
   
    {
      tab: "Good Health and Well-being",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Sustainable_Development_Goal_03GoodHealth.svg/1200px-Sustainable_Development_Goal_03GoodHealth.svg.png",
      content: `
      Good Health and Well-being: Ensure healthy lives and promote well-being for all at all ages. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor hendrerit sem sed tempus. Vivamus.
      `,
      heading: "Good Health and Well-being:",
    },
    {
      tab: "Quality Education",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCrv2xpZPfDDwggbJAatLdt_wesJvKysvk-A&s",
      content: ` Ensure inclusive and equitable quality education and promote lifelong learning opportunities. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor hendrerit sem sed tempus. Vivamus. `,
      heading: "Quality Education:",
    },
    {
      tab: "Gendar Equality .",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Sustainable_Development_Goal_05GenderEquality.svg/1200px-Sustainable_Development_Goal_05GenderEquality.svg.png",
      content: `
       Gender equality is a fundamental human right and a key driver of social and economic progress. Ensuring equal opportunities for all, regardless of gender, leads to stronger economies. `,
      heading: "Gendar Equality:",
    },
    {
      tab: "Clean Water and Sanitation",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Sustainable_Development_Goal_06CleanWaterSanitation.svg/1200px-Sustainable_Development_Goal_06CleanWaterSanitation.svg.png",
      content: `Ensure availability and sustainable management of water and sanitation for all. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor hendrerit sem sed tempus. Vivamus.
      `,
      heading: "Clean Water:",
    },
  ];

  const [CurrentTab, setCurrentTab] = useState(0);
  return (
    <div>
      <div className="flex justify-center items-center p-10">
        <div className="w-full place-items-center h-auto gap-6  bg-[url('https://s3-alpha-sig.figma.com/img/fc3a/feae/00050c121b8f535ccce0ccb5ec52335e?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q~9haYrjxbgo3TyJN6HqvML0FdnrBIiZtGTLGMmTvbCXJapuxMJphIEw7ZJujjG3~iJqwsrVOwSNM5ZiEqT5rkV8KOF9-QxVsRkHGfpNyPkvTFZTOllPPMU5JSx~3FwS5evoeD2Ttmj7DGRcmakfVf~sw6hlfvXZCpEhre6sLpXpQeDxg8c0nxfCXiu3U4paColi2J4ruvV74LbxjUiihWmgqqNxxV6HZnJVRMaOye0UnxGZ-94lo-eQmm6lqBX7WNSCIykL2XhPcoenPkGTrt31oZ2q~w8Du-x9EEGhX4GP0GqtbXAfglGDEOo8KpQOu2F0zDwLaMn~Yv1ruBGmiA__')] bg-cover bg-center rounded-lg shadow-lg relative overflow-hidden p-10">
          <h2 className="text-3xl z-20 drop-shadow-lg text-white font-bold tracking-wide text-center">
            12 Sustainable Development Goals
          </h2>
        {/* <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg"></div> */}
          <div className="grid place-items-center pt-5  grid-cols-3 md:grid-cols-6 gap-11">
            {sustainabilityGoals.map((data, index) => (
              <div
                key={index}
                onClick={() => setCurrentTab(index)}
                style={{ backgroundImage: `url(${data.image})` }}
                className={`bg-cover bg-center h-16 w-16 md:h-24 md:w-24 rounded cursor-pointer transition-all ${
                  CurrentTab === index ? "border-2 border-white scale-110" : ""
                }`}
              ></div>
            ))}

            <div className="p-5 bg-[#33694066] backdrop-blur-md col-span-3 md:col-span-6 rounded-lg shadow-md text-white  overflow-hidden flex flex-col gap-4">
              {Array.from({length:4})
                .map((_, index) => (
                  <div key={index} className="flex flex-col gap-1 w-full">
                    <h1 className="text-[#B5F1BC] text-sm font-semibold break-words">
                      {sustainabilityGoals[CurrentTab].heading}
                    </h1>
                    <p className="text-start text-sm break-words overflow-hidden text-ellipsis line-clamp-3">
                      {sustainabilityGoals[CurrentTab].content}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DevelopmentGoals;

{
  /*  */
}
