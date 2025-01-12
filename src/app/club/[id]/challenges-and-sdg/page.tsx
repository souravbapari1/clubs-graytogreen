import React from "react";
import TabList from "./_components/TabList";
import ChallengesAndSDG from "../_components/challengesAndSDG";

function page() {
  return (
    <div>
      <TabList />
      <div className="container">
        <ChallengesAndSDG />
      </div>
    </div>
  );
}

export default page;
