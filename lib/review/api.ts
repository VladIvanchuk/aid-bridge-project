export async function createReview(data: any) {
  const response = await fetch("/api/reviews", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function getReviews() {
  const response = await fetch("/api/reviews");
  return response.json();
}
export async function getReviewsByTarget(targetId: string) {
  const response = await fetch(`/api/reviews/${targetId}`);
  return response.json();
}
