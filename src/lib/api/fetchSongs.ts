export const fetchSongs = async (Id: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${Id}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch songs");
    }

    const result = await response.json();

    // console.log("ARTIST API RESULT:", result);

    // ✅ IMPORTANT
    return result.data || [];
  } catch (error) {
    console.error("Fetch Songs Error:", error);

    return [];
  }
};
