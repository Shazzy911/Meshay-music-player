export const fetchAlbumById = async (Id: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/album/${Id}`,
      {
        cache: "no-store",
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch album songs");
    }

    const result = await response.json();

    // console.log("ALBUM API RESULT:", result);

    // ✅ IMPORTANT
    return result.data || null; // ✅ return the whole album object
  } catch (error) {
    console.error("Fetch Album Songs Error:", error);

    return [];
  }
};
