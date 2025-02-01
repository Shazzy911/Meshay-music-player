import React from "react";
import style from "./page.module.scss";
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

const Page = async () => {
  const data = await fetchingData();

  return (
    <main>
      <section className={style.main_container}>
        {Array.isArray(data) && data.length > 0 ? (
          data.map((item) => (
            <Link href={`/artist/${item.id}`} key={item.id}>
              <div className={style.container}>
                <div className={style.imgContainer}>
                  <Image
                    src={item.img || "Image"}
                    alt="Image not found"
                    height={200}
                    width={200}
                  />
                </div>
                <div className={style.slideInfo}>
                  <h3>{item.name}</h3>
                  <p>Artist</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>No data available</p> // Fallback if data is undefined or empty
        )}
      </section>
    </main>
  );
};

export default Page;

export function generateMetadata() {
  return {
    title: "Meshay Music Streaming - Artist",
    description:
      "This is the galaxy blog, it contains information about the developer and owner of the website",
  };
}
