import React from "react";

function DevelopmentGoals() {
  return (
    <div>
      <div className=" flex justify-center items-center py-10">
        <div className="w-full p-5 h-auto lg:h-auto  gap-6 grid grid-rows-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-[url('https://s3-alpha-sig.figma.com/img/fc3a/feae/00050c121b8f535ccce0ccb5ec52335e?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q~9haYrjxbgo3TyJN6HqvML0FdnrBIiZtGTLGMmTvbCXJapuxMJphIEw7ZJujjG3~iJqwsrVOwSNM5ZiEqT5rkV8KOF9-QxVsRkHGfpNyPkvTFZTOllPPMU5JSx~3FwS5evoeD2Ttmj7DGRcmakfVf~sw6hlfvXZCpEhre6sLpXpQeDxg8c0nxfCXiu3U4paColi2J4ruvV74LbxjUiihWmgqqNxxV6HZnJVRMaOye0UnxGZ-94lo-eQmm6lqBX7WNSCIykL2XhPcoenPkGTrt31oZ2q~w8Du-x9EEGhX4GP0GqtbXAfglGDEOo8KpQOu2F0zDwLaMn~Yv1ruBGmiA__')] bg-cover bg-center rounded-lg shadow-lg relative overflow-hidden">
          <h2 className="text-3xl z-20 drop-shadow-lg  text-white font-bold tracking-wide sm:col-span-2 md:col-span-3 text-center">
          12 Sustainable Development Goals
                    </h2>
          <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg"></div>

          {Array.from({ length: 12 }).map((data, index) => (
            <div className="    text-white">
              <div className="p-5 bg-[#33694066]    backdrop-blur-md rounded-lg shadow-md w-full md:w-[80%] ">
                <h1 className=" text-[#B5F1BC] font-medium">
                  Zero Hunger:
                </h1>
                <p>End hunger, achieve food security, and promote sustainable agriculture.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DevelopmentGoals;
