export async function getCategories() {
  const response = await fetch("/api/categories");
  return response.json();
}
