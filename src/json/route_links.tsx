import { route_links_types } from "@/types/route_links_types";
import { FaHome } from "react-icons/fa";
import { FaNewspaper, FaStore, FaCalendarDays } from "react-icons/fa6";
export const sidebar_route_links: route_links_types[] = [
  {
    id: 1,
    link: "Home",
    route: "/",
    icon: <FaHome />,
  },
  {
    id: 2,
    link: "Events",
    route: "/events",
    icon: <FaCalendarDays />,
  },

  {
    id: 3,
    link: "Store",
    route: "/store",
    icon: <FaStore />,
  },
  {
    id: 4,
    link: "News",
    route: "/news",
    icon: <FaNewspaper />,
  },
];

export const topbar_route_links: route_links_types[] = [
  {
    id: 1,
    link: "Profile",
    route: "/profile",
  },
  {
    id: 2,
    link: "About",
    route: "/about",
  },
  {
    id: 3,
    link: "Contacts",
    route: "/contact",
  },
];
