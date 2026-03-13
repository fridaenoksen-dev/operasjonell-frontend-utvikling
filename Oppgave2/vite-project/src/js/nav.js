function isLoggedIn() {
  return localStorage.getItem("user") !== null;
}

export function updateNav() {
  const navGuest = document.querySelector("[data-nav-guest]");
  const navUser = document.querySelector("[data-nav-user]");

  if (isLoggedIn()) {
    navGuest.hidden = true;
    navUser.hidden = false;
  } else {
    navGuest.hidden = false;
    navUser.hidden = true;
  }
}
