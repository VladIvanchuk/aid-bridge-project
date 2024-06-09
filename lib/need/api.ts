export async function createNeed(data: any) {
  const response = await fetch("/api/needs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function getNeeds() {
  const response = await fetch("/api/needs");
  return response.json();
}

export async function getNeedById(id: string) {
  const response = await fetch(`/api/needs/${id}`);
  return response.json();
}
export async function getNeedsByAuthor(authorId: string) {
  const response = await fetch(`/api/needs/by-author/${authorId}`);
  return response.json();
}

export async function updateNeed(id: string, data: any) {
  const response = await fetch(`/api/needs/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function deleteNeed(id: string) {
  const response = await fetch(`/api/needs/${id}`, {
    method: "DELETE",
  });
  return response.json();
}
