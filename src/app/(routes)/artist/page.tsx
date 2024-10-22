import React from "react";

// Define a type for the user data
interface User {
  id: string;
  username: string;
  email: string;
  password: string; // Keep this if you need it; typically, you shouldn't display it.
  updatedAt: string;
  createdAt: string;
}
// Define a type for the entire API response
interface ApiResponse {
  response: User[];
}
const fetchingData = async (): Promise<User[] | undefined> => {
  try {
    const response = await fetch(
      "https://meshay-music-backend-production.up.railway.app/user",
      {
        cache: "no-store",
      }
    );

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
      {/* Check if data is available and is an array before mapping */}
      {Array.isArray(data) && data.length > 0 ? (
        data.map((item) => (
          <div key={item.id}>
            <h1>{item.username}</h1>
            <p>{item.email}</p>
            <p>Updated At: {item.updatedAt}</p>
            <p>Created At: {item.createdAt}</p>
          </div>
        ))
      ) : (
        <p>No data available</p> // Fallback if data is undefined or empty
      )}
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
