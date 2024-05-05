import { route_links_types } from "@/types/route_links_types";
import { FaHome } from "react-icons/fa";
import { FaNewspaper, FaStore, FaUserGroup , FaMusic, FaCalendarDays, FaMicrophone} from "react-icons/fa6";
export const sidebar_route_links: route_links_types[] = [
  {
    id: 1,
    link: "Home",
    route: "/",
    icon: <FaHome />,
  },
  {
    id: 2,
    link: "Artists",
    route: "/artists",
    icon: <FaUserGroup />,
  },
  {
    id: 3,
    link: "Release",
    route: "/release",
    icon: <FaMusic />,
  },
  {
    id: 4,
    link: "Events",
    route: "/events",
    icon: <FaCalendarDays />,
  },
  {
    id: 5,
    link: "Podcasts",
    route: "/podcasts",
    icon: <FaMicrophone />,
  },
  {
    id: 6,
    link: "Store",
    route: "/store",
    icon: <FaStore />,
  },
  {
    id: 7,
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
