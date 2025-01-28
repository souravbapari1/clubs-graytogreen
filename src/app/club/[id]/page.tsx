import { Goal, Home, ImagePlay, LucideGraduationCap, MapPinned, NotebookPen, PartyPopper, UsersIcon } from "lucide-react";
import AboutAndJoin from "./_components/AboutAndJoin";
import ClubAchievements from "./_components/ClubAchievements";
import ClubObjectives from "./_components/ClubObjectives";
import Header from "./_components/Header";
import NavLink from "@/components/layout/Navbar/NavLink";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Navigations from "./_components/Navigations";
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
function page() {
  return (
    <div>
      <Navigations/>
      <Header />
      <AboutAndJoin IsImageCenter={false} CardVisible={true} />
      <ClubObjectives />
      <ClubAchievements />
    </div>
  );
}

export default page;
