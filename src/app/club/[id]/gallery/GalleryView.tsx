"use client";
import React from "react";
import { useGalleryTabState } from "./_components/GalleryTab";
import ClubImageGallery from "./_components/ClubImageGallery";
import ClubVideoGallery from "./_components/ClubVideoGallery";

function GalleryView() {
  const { tabIndex } = useGalleryTabState();
  return (
    <div className="container mt-10">
      {tabIndex === 0 && <ClubImageGallery />}
      {tabIndex === 1 && <ClubVideoGallery />}
    </div>
  );
}

export default GalleryView;
