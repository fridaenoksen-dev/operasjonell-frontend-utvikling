// bookings.js (enkel 1.års versjon)

const API_BASE = "http://localhost:3000/api";

// 1) Aktiv bruker fra localStorage
function getCurrentUserId() {
  return localStorage.getItem("currentUserId"); // OBS: Id, ikke ID
}

// 2) Hente data fra API (GET)
async function getBookings() {
  const res = await fetch(`${API_BASE}/bookings`);
  return res.json();
}

async function getRooms() {
  const res = await fetch(`${API_BASE}/rooms`);
  return res.json();
}

// 3) Gjør om booking + rom til HTML-kort
