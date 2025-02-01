import style from "./Favorite.module.scss";
// import Button from "@/components/ui/button/Button";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { VscLibrary } from "react-icons/vsc";
import Link from "next/link";
import { favourite_route_links } from "@/json/route_links";
import Image from "next/image";

interface Artist {
  id: string;
  name: string;
  genre: string;
  bio: string;
  img: string;
  updatedAt: string;
  createdAt: string;
}
// Define a type for the entire API response
interface ApiResponse {
  response: Artist[];
}
const fetchingData = async (): Promise<Artist[] | undefined> => {
  try {
    const response = await fetch("http://localhost:8000/artist", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data: ApiResponse = await response.json(); // Ensure we are getting the right structure
    return data.response;
  } catch (error) {
    console.error("Error fetching data:", error);
    return undefined; // Return undefined on error
  }
};

const Favorite = async () => {
  let data = await fetchingData();

  return (
    <div className={style.container}>
      <div className={style.favorite_intro}>
        <VscLibrary />
        <h2>Your Favorite</h2>
      </div>

      <div>
        <div>
          <div className={style.search}>
            <input type="text" placeholder="Search you favorite" />
            <FaSearch className={style.search_icon} />
          </div>
        </div>
        <div className={style.dynamic_container}>
          {Array.isArray(data) && data.length > 0 ? (
            data.map((item) => (
              <Link
                className={style.link}
                key={item.id}
                href={`/artist/${item.id}`}
              >
                <span className={style.dynamic_wrapper}>
                  <Image
                    src={item.img || "/default-image.jpg"}
                    height={55}
                    width={55}
                    alt="Image not found"
                  />
                  <div>
                    <h4>{item.name}</h4>
                    <p>Artist</p>
                  </div>
                </span>
              </Link>
            ))
          ) : (
            <p>No data available</p> // Fallback if data is undefined or empty
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorite;
