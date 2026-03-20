export const API_BASE = "http://localhost:3000/api";

export const API_KEY = "stay123";

export async function apiGET(path) {
  const res = await fetch(`${API_BASE}${path}`);
  if (!res.ok) throw new Error(`GET ${path} feilet (${res.status})`);
}

export async function apiPost(path, data) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": API_KEY,
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(`POST ${path}) feilet (${res.status})`);
}
