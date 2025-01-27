import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { JSX } from "react";
import DesktopMenuBar from "./DesktopMenuBar";
import MobileMenuBar from "./MobileMenuBar";
import Link from "next/link";
import { IoMdOpen } from "react-icons/io";
import {
  Goal,
  Home,
  ImagePlay,
  LucideGraduationCap,
  MapPinned,
  NotebookPen,
  PartyPopper,
  UsersIcon,
} from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { LogIn, User } from "lucide-react";
import NavigationOptions from "@/app/club/[id]/_components/NavigationOptions";
import NavLink from "./NavLink";
// import { useParams } from "next/navigation";
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
    name: "Sponsors",
    href: "/club/id/sponsors",
    icons: <LucideGraduationCap size={18} className="text-primary/70" />,
  },
  {
    name: "Gallery",
    href: "/club/id/gallery",
    icons: <ImagePlay size={18} className="text-primary/70" />,
  },
  {
    name: "Projects",
    href: "/club/id/projects",
    icons: <MapPinned size={18} className="text-primary/70" />,
  },
  {
    name: "Blogs",
    href: "/club/id/blogs",
    icons: <NotebookPen size={18} className="text-primary/70" />,
  },
];
async function Navbar(): Promise<JSX.Element> {
  // const paramts = useParams()
  return (
    <div className="sticky top-0 right-0 z-40  lg:shadow-none shadow-md shadow-gray-950/5">
      <div className="w-full flex bg-white z-50 justify-end items-end">
        <div className="lg:px-20 md:px-5 lg:w-auto w-full h-8 text-xs bg-[#68B030]/20 z-50 lg:rounded-tl-full flex justify-end items-center gap-8">
          <Link className="lg:block hidden" href="/about-us">
            About Us
          </Link>
          <Link className="lg:block hidden" href="/transparency">
            Transparency
          </Link>
          <Link className="lg:block hidden" href="/live-and-podcasts">
            Live & podcasts
          </Link>
          <Link className="lg:block hidden" href="/tracking">
            Tracking
          </Link>
          <Link className="lg:block hidden" href="/blogs">
            Blogs
          </Link>
          <Link className="lg:block hidden" href="/pages/contact-us">
            Help Center
          </Link>
          <Link className="lg:block hidden" href="/research">
            Researchs
          </Link>
          {/* {data?.user.token ? (
            <Link className="lg:block hidden" href="/account">
              <User size={15} />
            </Link>
          ) : ( */}
          <Link className="lg:block hidden" href="/auth/signin">
            <LogIn size={15} />
          </Link>
          {/* )} */}
          <Link
            href="/platform"
            className="bg-white p-4 text-xs md:rounded-full md:py-[5px] py-[8px] font-bold text-green-900 flex justify-center items-center gap-2"
          >
            <IoMdOpen size={15} />
            <p> Open Platform</p>
          </Link>
        </div>
      </div>
      <div className="w-full h-14 overflow-hidden bg-white  border-b border-b-green-950/5 z-40 ">
        <div className="container flex justify-between items-center w-full h-full">
          <div className="lg:w-44 flex justify-start items-center gap-3 h-full ">
            <MobileMenuBar />
            <Link href="/">
              <Image
                src="/logo/main-logo.png"
                width={200}
                height={200}
                alt="logo"
                className="w-auto object-contain md:h-[65px] lg:-mt-3 h-16 py-3 mb:pb-5"
              />
            </Link>
          </div>

          <DesktopMenuBar />
 
          <Link href="/projects" className="md:w-28">
            <Button className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-full shadow-md shadow-green-400/60 border-none md:px-8 px-5   font-extrabold text-white/85">
              Act Now
            </Button>
          </Link>
        </div>
      </div>
     
      
    </div>
  );
}

export default Navbar;
