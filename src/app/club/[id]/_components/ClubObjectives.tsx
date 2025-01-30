import { CheckCircle2Icon, CheckCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

function ClubObjectives() {
  return (
    <div className="container flex justify-center items-center py-10">
      <div className="w-full p-5 py-24 h-auto   bg-[url('https://s3-alpha-sig.figma.com/img/fc3a/feae/00050c121b8f535ccce0ccb5ec52335e?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q~9haYrjxbgo3TyJN6HqvML0FdnrBIiZtGTLGMmTvbCXJapuxMJphIEw7ZJujjG3~iJqwsrVOwSNM5ZiEqT5rkV8KOF9-QxVsRkHGfpNyPkvTFZTOllPPMU5JSx~3FwS5evoeD2Ttmj7DGRcmakfVf~sw6hlfvXZCpEhre6sLpXpQeDxg8c0nxfCXiu3U4paColi2J4ruvV74LbxjUiihWmgqqNxxV6HZnJVRMaOye0UnxGZ-94lo-eQmm6lqBX7WNSCIykL2XhPcoenPkGTrt31oZ2q~w8Du-x9EEGhX4GP0GqtbXAfglGDEOo8KpQOu2F0zDwLaMn~Yv1ruBGmiA__')] bg-cover bg-center rounded-3xl shadow-lg relative overflow-hidden">
        <h2 className="text-4xl z-20  relative text-white font-bold tracking-wide  text-center">
          Club Objectives
        </h2>
        <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg"></div>

        <div className="px-24 grid grid-cols-2 gap-8 mt-20">
          {Array.from({ length: 4 }).map((data, index) => (
            <div className="relative flex flex-col justify-center items-center   text-white">
              <div className="p-5 bg-[#33694066] gap-5 flex  items-center backdrop-blur-md rounded-3xl shadow-md w-full ">
                <p className="text-xl font-medium">
                  <CheckCircle size={40} />
                </p>
                <h1 className="text-[12px] md:text-lg font-medium mt-2 ml-3">
                  Founded in 2022 with a mission to promote sustainability
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClubObjectives;
