import { atom } from 'jotai';


export const isLogedIn = atom(false);
export const firstName = atom("")
export const lastName = atom("")
export const email = atom("")
export const password = atom("")

export const ThemeAtom = atom(localStorage.getItem("theme") || "light");

