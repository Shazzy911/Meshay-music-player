export const fetchAlbum = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/album`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch albums");
    }

    const result = await response.json();

    // console.log("ALBUM API RESULT:", result);

    // ✅ IMPORTANT
    return result.data || [];
  } catch (error) {
    console.error("Fetch Albums Error:", error);

    return [];
  }
};
