const API_BASE = "http://localhost:3000/api";
const API_KEY = "stay123";

function getCurrentUserId() {
  return localStorage.getItem("currentUserId");
}

async function fetchJSON(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.json();
}
