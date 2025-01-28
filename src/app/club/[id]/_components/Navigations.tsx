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
import NavLink from "@/components/layout/Navbar/NavLink";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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

function Navigations() {
  return (
    <div className="w-full h-[70px] hidden md:flex justify-center gap-3 bg-[#EBF3E8]">
      {menuItems.map((item, index) => (
        <TooltipProvider key={index}>
          <Tooltip>
            <TooltipTrigger>
              <NavLink
                href={item.href}
                className="bg-white md:text-[1.9vmin] lg:text-[18px] text-[#336940] p-4 py-2 rounded-full"
              >
                {item.name}
              </NavLink>
            </TooltipTrigger>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
}

export default Navigations;
