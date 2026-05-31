const API_BASE_URL = "http://localhost:5000";

export async function generateReplies(data: {
  postContent: string;
  authorBio?: string;
  imageDescription?: string;
  additionalNotes?: string;
}) {
  const response = await fetch(
    `${API_BASE_URL}/api/generate`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to generate replies");
  }

  return response.json();
}