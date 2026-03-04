const user = "currentUserId";

export function getCurrentUserId() {
  return localStorage.getItem(user);
}

export function setCurrentUserId(id) {
  localStorage.setItem(user, id);
}

export function clearCurrentUserId() {
  localStorage.removeItem(user);
}
