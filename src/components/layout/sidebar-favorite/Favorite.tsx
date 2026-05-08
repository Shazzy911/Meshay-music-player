import React from "react";

import style from "./Favorite.module.scss";

// import Button from "@/components/ui/button/Button";
import { FaSearch } from "react-icons/fa";
import { VscLibrary } from "react-icons/vsc";

// import { fetchArtist } from "@/app/action/FetchArtist";
import FavoriteLibrary from "@/components/ui/small/fav-lib/FavoriteLibrary";

interface Artist {
  id: string;
  name: string;
  genre: string;
  bio: string;
  img: string;
  updatedAt: string;
  createdAt: string;
}

interface ApiResponse {
  response: Artist[];
}

export const fetchArtist = async (): Promise<Artist[] | undefined> => {
  try {
    const response = await fetch("http://localhost:8000/artist", {
      cache: "force-cache",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data: ApiResponse = await response.json();
    return data.response;
  } catch (error) {
    console.error("Error fetching data:", error);
    return undefined;
  }
};

const Favorite = async () => {
  const data = await fetchArtist();

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
        {/* Pass the fetched data as a prop to Favorite */}
        <FavoriteLibrary data={data} />
      </div>
    </div>
  );
};

export default Favorite;
