export async function getCategories() {
  const response = await fetch("/api/categories");
  return response.json();
}
export async function getCategoriesByIds(ids: string[]) {
  const idQuery = ids.join(",");
  const response = await fetch(`/api/categories/${idQuery}`);
  return response.json();
}
