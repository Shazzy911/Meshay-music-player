export const fetchArtistById = async (Id: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/artist/${Id}`,
      {
        cache: "no-store",
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch artist songs");
    }

    const result = await response.json();

    // console.log("ARTIST API RESULT:", result);

    // ✅ IMPORTANT
    return result.data || null; // ✅ return the whole artist object
  } catch (error) {
    console.error("Fetch Artist Songs Error:", error);

    return [];
  }
};
