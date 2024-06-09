export async function createNews(data: any) {
  const response = await fetch("/api/news", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function getNews() {
  const response = await fetch("/api/news");
  return response.json();
}

export async function getNewsById(id: string) {
  const response = await fetch(`/api/news/${id}`);
  return response.json();
}

export async function updateNews(id: string, data: any) {
  const response = await fetch(`/api/news/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function deleteNews(id: string) {
  const response = await fetch(`/api/news/${id}`, {
    method: "DELETE",
  });
  return response.json();
}
