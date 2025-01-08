import {
  Goal,
  Home,
  ImagePlay,
  LucideGraduationCap,
  NotebookPen,
  PartyPopper,
  UsersIcon,
} from "lucide-react";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

const menuItems = [
  {
    name: "Home",
    href: "/club/id",
    icons: <Home size={18} className="text-primary/70" />,
  },
  {
    name: "Challenges and SDG",
    href: "/club/id/challenges-and-sdg",
    icons: <Goal size={18} className="text-primary/70" />,
  },
  {
    name: "Members",
    href: "/club/id/members",
    icons: <UsersIcon size={18} className="text-primary/70" />,
  },
  {
    name: "Events",
    href: "/club/id/events",
    icons: <PartyPopper size={18} className="text-primary/70" />,
  },
  {
    name: "Club",
    href: "/club",
    icons: <LucideGraduationCap size={18} className="text-primary/70" />,
  },
  {
    name: "Club",
    href: "/club",
    icons: <ImagePlay size={18} className="text-primary/70" />,
  },
  {
    name: "Club",
    href: "/club",
    icons: <NotebookPen size={18} className="text-primary/70" />,
  },
];

function NavigationOptions() {
  return (
    <div className="fixed md:left-4 md:top-0 bottom-3 md:my-auto  z-40 md:h-full md:w-14 w-full flex md:flex-col flex-row justify-center items-center">
      <div className=" flex md:justify-between md:flex-col flex-row md:items-center  shadow-md  bg-white md:w-14  p-2 rounded-full gap-2">
        {menuItems.map((item, index) => (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger>
                <Link
                  href={item.href}
                  className="w-11 h-11 bg-primary/10 hover:bg-primary/20 rounded-full border-2 border-primary/20 flex justify-center items-center"
                >
                  {item.icons}
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>{item.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
}

export default NavigationOptions;
