// Frida E. Enoksen

const USER = "currentUserId";

export function getCurrentUserId() {
  return localStorage.getItem(USER); // returnerer enten en string eller null
}

export function setCurrentUserId(id) {
  localStorage.setItem(USER, String(id)); // gjør at id lagres som en string
}

export function logout() {
  localStorage.removeItem(USER); // fjerner den fra localStorage, altså logger ut brukeren
}

// På Mine sider (etter innlogging) kalles setCurrentUserId for å lagre id-en til den innloggede brukeren i localStorage.
// På alle andre sider kalles getCurrentUserId for å sjekke om det er en innlogget bruker.

// Koden kjøres når siden lastes inn (DOMContentLoaded) og når brukeren trykker "logg inn", "registrer" eller "logg ut".
