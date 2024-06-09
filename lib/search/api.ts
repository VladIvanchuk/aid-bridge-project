export async function getSearchedData(key: string) {
  const response = await fetch(`/api/search/${key}`);
  return response.json();
}
