export const fetchArtists = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/artist`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch artists");
    }

    const result = await response.json();

    // console.log("ARTIST API RESULT:", result);

    // ✅ IMPORTANT
    return result.data || [];
  } catch (error) {
    console.error("Fetch Artists Error:", error);

    return [];
  }
};
