import style from "./Favorite.module.scss";
// import Button from "@/components/ui/button/Button";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { VscLibrary } from "react-icons/vsc";
import Link from "next/link";
import { favourite_route_links } from "@/json/route_links";
import Image from "next/image";

const Favorite = () => {
  return (
    <div className={style.container}>
      <div className={style.favorite_intro}>
        <VscLibrary />
        <h2>Your Favorite</h2>
      </div>
      {/* <div className={style.buttons}>
        <Button
          text="Playlist"
          style={{
            padding: "5px",
            fontSize: "1.2rem",
            minHeight: "3rem",
            minWidth: "6rem",
            fontWeight: 400,
          }}
        />
        <Button
          text="Artist"
          style={{
            padding: "5px",
            fontSize: "1.2rem",
            minHeight: "3rem",
            minWidth: "6rem",
            fontWeight: 400,
          }}
        />
        <Button
          text="Album"
          style={{
            padding: "5px",
            fontSize: "1.2rem",
            minHeight: "3rem",
            minWidth: "6rem",
            fontWeight: 400,
          }}
        />
      </div> */}

      <div>
        <div>
          <div className={style.search}>
            <input type="text" placeholder="Search you favorite" />
            <FaSearch className={style.search_icon} />
          </div>
        </div>
        <div className={style.dynamic_container}>
          {favourite_route_links.map(
            ({ image, id, title, subtitle, route }) => (
              <Link className={style.link} key={id} href={route}>
                <span className={style.dynamic_wrapper}>
                  <Image
                    src={image || "/default-image.jpg"}
                    height={55}
                    width={55}
                    alt="Image not found"
                  />
                  <div>
                    <h4>{title}</h4>
                    <p>{subtitle}</p>
                  </div>
                </span>
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorite;
