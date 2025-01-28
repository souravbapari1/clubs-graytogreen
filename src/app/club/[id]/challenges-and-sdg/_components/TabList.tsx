"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { create } from "zustand";

function TabList() {
  const { setTabIndex, tabIndex } = useCASTabsState();
  const activeClassName = "border-b-2 text-white rounded-full bg-[#336940]  ";
  return (
    <div>
      <div className=" w-auto p-3 py-1 rounded-full bg-[#EAFFE8] h-12 border-b flex justify-center items-center gap-4 text-sm select-none font-bold text-gray-700">
        <p
          onClick={() => setTabIndex(0)}
          className={cn(
            "h-full flex text-[#336940] justify-center items-center  w-24 cursor-pointer border-b-2 border-transparent",
            tabIndex === 0 && activeClassName
          )}
        >
          SDG (3)
        </p>
        <p
          onClick={() => setTabIndex(1)}
          className={cn(
            "h-full flex text-[#336940] justify-center items-center  w-32 cursor-pointer border-b-2 border-transparent",
            tabIndex === 1 && activeClassName
          )}
        >
          Challenges (2)
        </p>
      </div>
    </div>
  );
}

export default TabList;

export const useCASTabsState = create<{
  tabIndex: number;
  setTabIndex: (index: number) => void;
}>((set) => ({
  tabIndex: 0,
  setTabIndex: (index: number) => set({ tabIndex: index }),
}));
