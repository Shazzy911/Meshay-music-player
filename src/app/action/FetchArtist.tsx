"use server";

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
