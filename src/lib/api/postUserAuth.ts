export const postUser = async (formData: FormData) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to create user");
  }

  return response.json();
};
