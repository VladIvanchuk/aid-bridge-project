export async function createOpportunity(data: any) {
  const response = await fetch("/api/opportunities", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function getOpportunities() {
  const response = await fetch("/api/opportunities");
  return response.json();
}

export async function getOpportunitiesById(id: string) {
  const response = await fetch(`/api/opportunities/${id}`);
  return response.json();
}

export async function updateOpportunities(id: string, data: any) {
  const response = await fetch(`/api/opportunities/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function deleteOpportunities(id: string) {
  const response = await fetch(`/api/opportunities/${id}`, {
    method: "DELETE",
  });
  return response.json();
}
