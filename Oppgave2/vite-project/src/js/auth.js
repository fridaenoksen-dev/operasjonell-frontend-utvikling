const KEY = "currentUserId";

export function getCurrentUserId() {
  return localStorage.getItem(KEY);
}

export function setCurrentUserId(id) {
  localStorage.setItem(KEY, String(id));
}

export function logout() {
  localStorage.removeItem(KEY);
}
