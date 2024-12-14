import { atom } from 'jotai';

export const isLogedIn = atom(true);
export const ThemeAtom = atom(localStorage.getItem("theme") || "light");