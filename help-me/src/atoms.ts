import { atom } from 'jotai';

export const isLogedIn = atom(true);
// export const isLogedIn = atom(localStorage.getItem("isLoggedIn") ? true : false);
// export const isLogedIn = atom(localStorage.getItem("authToken") ? true : false);
export const firstName = atom("")
export const lastName = atom("")
export const email = atom("")
export const password = atom("")
export const showLogoutModal = atom(false)

export const ThemeAtom = atom(localStorage.getItem("theme") || "light");

