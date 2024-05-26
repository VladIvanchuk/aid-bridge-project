export async function getUserData() {
  const response = await fetch("/api/user", {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }

  return response.json();
}
export async function updateUserData(data: any) {
  try {
    const response = await fetch(`/api/user/`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to update user data");
    }

    return response.json();
  } catch (err) {
    console.error("Error updating user data:", err);
    throw err;
  }
}
