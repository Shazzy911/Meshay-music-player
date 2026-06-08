export const logInUser = async (formData: FormData) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
    {
      method: "POST",
      body: formData,
      credentials: "include", // Include cookies
    },
  );

  if (!response.ok) {
    throw new Error("Failed to log in user");
  }

  return response.json();
};
