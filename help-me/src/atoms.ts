import { atom } from 'jotai';

export const isLogedIn = atom(false);
export const ThemeAtom = atom(localStorage.getItem("theme") || "light");
export const AddQuestionModalAtom = atom(false);
