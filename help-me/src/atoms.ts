import { atom } from 'jotai';

// export const isLogedIn = atom(false);
export const isLogedIn = atom(localStorage.getItem("isLoggedIn") === "true" ? true : false);

export const firstName = atom("")
export const lastName = atom("")
export const email = atom("")
export const password = atom("")
export const showLogoutModal = atom(false)
export const showdeleteAccount = atom(false)
export const welcome = atom(false)

export const ThemeAtom = atom(localStorage.getItem("theme") || "light");
export const AddQuestionModalAtom = atom(false);