import styles from "./Favorite.module.scss";

import Image from "next/image";
import Link from "next/link";

import { FaSearch } from "react-icons/fa";
import { VscLibrary } from "react-icons/vsc";

import { fetchArtists } from "@/lib/api/fetchArtist";

const Favorite = async () => {
  const artists = await fetchArtists();

  return (
    <section className={styles.container}>
      <div className={styles.favorite_intro}>
        <VscLibrary />

        <h2>Your Favorite</h2>
      </div>

      <div className={styles.search}>
        <input type="text" placeholder="Search your favorite" />

        <FaSearch className={styles.search_icon} />
      </div>

      <div className={styles.containerfavorite}>
        {Array.isArray(artists) && artists.length > 0 ? (
          artists.map((artist) => (
            <Link
              key={artist.id}
              href={`/artists/${artist.id}`}
              className={styles.link}
            >
              <div className={styles.dynamic_wrapper}>
                <div className={styles.image_wrapper}>
                  <Image
                    src={artist.img || "/default-artist-image.jpg"}
                    alt={artist.name || "Artist image"}
                    width={55}
                    height={55}
                    className={styles.artist_image}
                    quality={90}
                  />
                </div>

                <div className={styles.artist_info}>
                  <h4>{artist.name}</h4>

                  <p>Artist</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>No artists available</p>
        )}
      </div>
    </section>
  );
};

export default Favorite;
