import React from "react";
import Link from "next/link";
import styles from "./page.module.scss";
import Image from "next/image";
const albums = [
  {
    id: 1,
    name: "After Hours",
    artist: "The Weeknd",
    image:
      "https://i.pinimg.com/736x/bc/5f/f7/bc5ff72ea6df03520668ba68f4916533.jpg",
  },
  {
    id: 2,
    name: "Folklore",
    artist: "Taylor Swift",
    image:
      "https://i.pinimg.com/736x/bc/5f/f7/bc5ff72ea6df03520668ba68f4916533.jpg",
  },
  {
    id: 3,
    name: "Scorpion",
    artist: "Drake",
    image:
      "https://i.pinimg.com/736x/bc/5f/f7/bc5ff72ea6df03520668ba68f4916533.jpg",
  },
  {
    id: 4,
    name: "Happier Than Ever",
    artist: "Billie Eilish",
    image:
      "https://i.pinimg.com/736x/bc/5f/f7/bc5ff72ea6df03520668ba68f4916533.jpg",
  },
];

const Albums = () => {
  return (
    <div className={styles.albumsContainer}>
      <h1>Music Albums</h1>
      <div className={styles.albumGrid}>
        {albums.map((album) => (
          <Link
            key={album.id}
            href={`/album/${album.id}`}
            className={styles.albumCard}
          >
            <Image
              height={200}
              width={200}
              src={album.image}
              alt="File not found"
            />
            <h3>{album.name}</h3>
            <p>{album.artist}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Albums;
