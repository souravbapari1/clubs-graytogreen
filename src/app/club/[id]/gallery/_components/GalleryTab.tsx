"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { create } from "zustand";

function GalleryTab() {
  const { setTabIndex, tabIndex } = useGalleryTabState();
  const activeClassName = "border-b-2 border-primary text-primary";
  return (
    <div>
      <div className="w-full bg-gray-200 h-14 border-b flex justify-center items-center gap-10 text-sm select-none font-bold text-gray-700">
        <p
          onClick={() => setTabIndex(0)}
          className={cn(
            "h-14 flex justify-center items-center  w-24 cursor-pointer border-b-2 border-transparent",
            tabIndex === 0 && activeClassName
          )}
        >
          Our Gallery
        </p>
        <p
          onClick={() => setTabIndex(1)}
          className={cn(
            "h-14 flex justify-center items-center  w-32 cursor-pointer border-b-2 border-transparent",
            tabIndex === 1 && activeClassName
          )}
        >
          Watch Videos
        </p>
      </div>
    </div>
  );
}

export default GalleryTab;

export const useGalleryTabState = create<{
  tabIndex: number;
  setTabIndex: (index: number) => void;
}>((set) => ({
  tabIndex: 0,
  setTabIndex: (index: number) => set({ tabIndex: index }),
}));
