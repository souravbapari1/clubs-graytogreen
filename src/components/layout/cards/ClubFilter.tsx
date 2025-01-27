"use client";
import { Input } from "@/components/ui/input";
import { Filter, Search } from "lucide-react";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

function ClubFilter() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="container mx-auto mt-10">
        <div className="md:px-4 px-5">
          <div className="mx-auto md:h-14 h-12 bg-[#F9F9F9]   flex justify-between  md:px-6 px-4  items-center rounded-full relative">
            <div className="flex justify-start items-center md:gap-2 relative">
              <div className="w-10">
                <Search className="text-gray-300" />
              </div>
              <input
                placeholder="Search Clubs"
                className="lg:text-base text-sm h-full bg-transparent focus:outline-none  hover:outline-none"
              />
            </div>
            <div className="lg:hidden">
              <div
                onClick={() => setOpen(true)}
                className="w-9 h-9 bg-primary flex justify-center items-center rounded-full absolute right-2 top-1.5"
              >
                <Filter className="text-white" size={16} />
              </div>
            </div>
            <div className="lg:block hidden">{clubFilter()}</div>
          </div>
        </div>
      </div>
      <ClubsFilterDrawer open={open} setOpen={setOpen} />
    </>
  );
}

export default ClubFilter;

const ClubsFilterDrawer = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Apply Filters</DrawerTitle>
        </DrawerHeader>
        <div className="p-5">{clubFilter()}</div>
        <DrawerFooter>
          <Button className="shadow-none">Apply Filter</Button>
          <DrawerClose>
            <Button size="sm" variant="outline" className="shadow-none">
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

const clubFilter = () => {
  return (
    <div className="flex lg:justify-end items-center lg:flex-row flex-col gap-4">
      <Select>
        <SelectTrigger className="lg:w-[100px]  shadow-none lg:rounded-full lg:bg-white  lg:border-none">
          <SelectValue placeholder="SDG`S" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="lg:w-[120px] shadow-none lg:rounded-full lg:bg-white  lg:border-none">
          <SelectValue placeholder="Country" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="lg:w-[80px] shadow-none lg:rounded-full lg:bg-white  lg:border-none">
          <SelectValue placeholder="City" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="lg:w-[190px] shadow-none lg:rounded-full lg:bg-white  lg:border-none">
          <SelectValue placeholder="Related Challenges" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
