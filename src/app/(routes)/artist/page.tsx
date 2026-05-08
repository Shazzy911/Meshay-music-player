import React from "react";
import styles from "./page.module.scss";
import Link from "next/link";
import Image from "next/image";
// Define a type for the user data
interface User {
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
  response: User[];
}
const fetchingData = async (): Promise<User[] | undefined> => {
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

const page = async () => {
  const artists = await fetchingData();

  return (
    <div className={styles.artistsContainer}>
      <h1>Top Artists</h1>
      <div className={styles.artistGrid}>
        {Array.isArray(artists) && artists.length > 0 ? (
          artists.map((artist) => (
            <Link
              key={artist.id}
              href={`/artist/${artist.id}`}
              className={styles.artistCard}
            >
              <Image
                src={artist.img}
                alt={artist.name}
                height={200}
                width={200}
              />
              <h3>{artist.name}</h3>
            </Link>
          ))
        ) : (
          <p>No data available</p> // Fallback if data is undefined or empty
        )}

        {}
      </div>
    </div>
  );
};

export default page;

export function generateMetadata() {
  return {
    title: "Meshay Music Streaming - Artist",
    description:
      "This is the galaxy blog, it contains information about the developer and owner of the website",
  };
}
