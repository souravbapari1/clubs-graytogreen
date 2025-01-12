import Navbar from "@/components/layout/Navbar/Navbar";
import React from "react";
import GalleryTab from "../../_components/GalleryTab";
import GalleryView from "../../GalleryView";

function page() {
  return (
    <div>
      <GalleryTab />
      <GalleryView />
    </div>
  );
}

export default page;
