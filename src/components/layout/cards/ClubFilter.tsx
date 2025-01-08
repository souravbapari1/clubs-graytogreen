import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function ClubFilter() {
  return (
    <div className="w-full md:h-16 bg-primary/10 rounded-full flex justify-between items-center border-2 border-primary/5 md:px-6 px-3 p-2 ">
      <div className="flex justify-between items-center md:gap-5 gap-3 w-full">
        <div className="flex items-center gap-3 w-full">
          <Search className="text-primary/30" />
          <input
            className="w-full h-full bg-transparent  outline-none px-2 md:text-lg text-sm placeholder:text-green-950/50"
            type="text"
            placeholder="Search for clubs"
          />
        </div>
        <div className="lg:flex hidden justify-end items-end gap-3  w-full">
          <Select>
            <SelectTrigger className="md:w-[100px] w-28 bg-white shadow-none border-none rounded-full text-xs px-5">
              <SelectValue placeholder="SDGS" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="md:w-[120px] w-28 bg-white shadow-none border-none rounded-full text-xs px-5">
              <SelectValue placeholder="Country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="md:w-[100px] w-28 bg-white shadow-none border-none rounded-full text-xs px-5">
              <SelectValue placeholder="City" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="md:w-[180px] w-44 bg-white shadow-none border-none rounded-full text-xs px-5">
              <SelectValue placeholder="Related Challenges" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}

export default ClubFilter;
