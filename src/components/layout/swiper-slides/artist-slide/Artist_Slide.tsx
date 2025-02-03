import React from "react";
import style from "./Artist_Slide.module.scss";
import Link from "next/link";
import Image from "next/image";
import { fetchArtist } from "@/app/action/FetchArtist";

// Define the artist type based on your API response
// interface Artist {
//   id: string;
//   artist_name: string;
//   image: string;
//   // Add other fields as needed
// }
// interface Artist {
//   id: string;
//   name: string;
//   genre: string;
//   bio: string;
//   img: string;
//   updatedAt: string;
//   createdAt: string;
// }

// interface ApiResponse {
//   response: Artist[];
// }
// async function getArtists() {
//   try {
//     // Replace with your API endpoint
//     const response = await fetch("http://localhost:8000/artist", {
//       // Add cache revalidation if needed
//       next: { revalidate: 3600 }, // revalidate every hour
//     });

//     if (!response.ok) {
//       throw new Error("Failed to fetch artists");
//     }

//     const data: ApiResponse[] = await response.json();
//     console.log(data);
//     return data.flatMap((apiResponse) => apiResponse.response);
//   } catch (error) {
//     console.error("Error fetching artists:", error);
//     return [];
//   }
// }

const Artist_Slide = async () => {
  // Fetch data in the server component
  const artists = await fetchArtist();

  if (!artists || !artists.length) {
    return <p>Error while fetching</p>;
  }

  // Return the mapped components without fragment wrapper
  return artists.map((item) => (
    <Link href={`/artist/${item.id}`} key={item.id}>
      <div className={style.container}>
        <div className={style.imgContainer}>
          <Image
            src={item.img || "/default-artist-image.jpg"} // Add a default image path
            alt={`${item.name}'s photo`}
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
  ));
};

export default Artist_Slide;

// import React from "react";
// import style from "./Artist_Slide.module.scss";
// import Link from "next/link";
// import Image from "next/image";
// import { artist_slide_json } from "@/json/artist_slide.json";

// // interface Artist {
// //   id: string;
// //   name: string;
// //   genre: string;
// //   bio: string;
// //   img: string;
// //   updatedAt: string;
// //   createdAt: string;
// // }

// const Artist_Slide = () => {
//   return (
//     <>
//       {Array.isArray(artist_slide_json) && artist_slide_json.length > 0 ? (
//         artist_slide_json.map((item) => (
//           <Link href={`/artist/${item.id}`} key={item.id}>
//             <div className={style.container}>
//               {" "}
//               <div className={style.imgContainer}>
//                 <Image
//                   src={item.image || "Image"}
//                   alt="Image not found"
//                   height={200}
//                   width={200}
//                   // layout="responsive" // Automatically adjusts to the image's original dimensions
//                   // objectFit="cover" // Fills the container without stretching
//                 />
//               </div>
//               <div className={style.slideInfo}>
//                 <h3>{item.artist_name}</h3>
//                 <p>Artist</p>
//               </div>
//             </div>
//           </Link>
//         ))
//       ) : (
//         <p>Error while fetching</p> // Fallback if data is undefined or empty
//       )}
//     </>
//   );
// };

// export default Artist_Slide;
