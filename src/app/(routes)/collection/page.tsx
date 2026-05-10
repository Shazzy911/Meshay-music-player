import styles from "./page.module.scss";
import Link from "next/link";
import Image from "next/image";
import { fetchAlbum } from "@/lib/api/fetchAlbum";

const page = async () => {
  const collection = await fetchAlbum();

  return (
    <div className={styles.artistsContainer}>
      <h1>Top Artists</h1>
      <div className={styles.artistGrid}>
        {Array.isArray(collection) && collection.length > 0 ? (
          collection.map((album) => (
            <Link
              key={album.id}
              href={`/collection/${album.id}`}
              className={styles.artistCard}
            >
              <Image
                src={album.img}
                alt={album.name}
                height={200}
                width={200}
              />
              <h3>{album.name}</h3>
            </Link>
          ))
        ) : (
          <p>No data available</p>
        )}

        {}
      </div>
    </div>
  );
};

export default page;

export function generateMetadata() {
  return {
    title: "Meshay Music Streaming - Collection",
    description:
      "This is the galaxy blog, it contains information about the developer and owner of the website",
  };
}
