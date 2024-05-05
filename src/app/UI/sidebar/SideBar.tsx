import { sidebar_route_links } from "@/json/route_links";
import style from "./SideBar.module.scss";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/app/images/Hero.png";
const SideBar = () => {
  return (
    <div className={style.container}>
      <div className={style.logo_container}>
        <Image src={Hero} alt="Image not found" width={40} height={40} />
        <h2>Meshay</h2>

      </div>


      <div className={style.link_container}>
        {
          sidebar_route_links.map((item) => (
            <Link className={style.link} key={item.id} href={item.route} ><span>{item.icon}</span>{item.link}</Link>
          ))
        }
      </div>
    </div>
  )
}

export default SideBar