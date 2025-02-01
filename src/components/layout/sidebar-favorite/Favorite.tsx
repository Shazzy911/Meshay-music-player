import React, { Suspense } from "react";

import style from "./Favorite.module.scss";

// import Button from "@/components/ui/button/Button";
import { FaSearch } from "react-icons/fa";
import { VscLibrary } from "react-icons/vsc";

import { fetchArtist } from "@/app/action/FetchArtist";
import FavoriteLibrary from "@/components/ui/small/fav-lib/FavoriteLibrary";

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
        <Suspense fallback={<div>Loading...</div>}>
          {/* Pass the fetched data as a prop to Favorite */}
          <FavoriteLibrary data={data} />
        </Suspense>
      </div>
    </div>
  );
};

export default Favorite;
