import React from "react";
import TabList from "./_components/TabList";
import ChallengesAndSDG from "../_components/challengesAndSDG";
import Navigations from "../_components/Navigations";
import Header from "../_components/Header";
import DevelopmentGoals from "../_components/DevelopmentGoals";
import PurposeOfSdg from "../_components/PurposeOfSdg";

function page() {
  return (
    <div className="">
      <Navigations/>
      <div className="container p-4 flex justify-center items-center flex-col ">
      <h1 className="text-[#336940] text-center text-2xl font-bold mb-[20px]">Purpose of the SDGs</h1>

      <TabList />
        <ChallengesAndSDG />
        <DevelopmentGoals/>
      <h1 className="text-[#336940] text-center text-2xl font-bold mb-[20px]">Challenges with SDGs</h1>
        <PurposeOfSdg/>
      </div>
    </div>
  );
}

export default page;
