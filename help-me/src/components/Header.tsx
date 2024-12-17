import { useAtom, useAtomValue } from "jotai";
import { isLogedIn, ThemeAtom } from "../atoms";

import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import DropdownMenu from "./DropdownMenu";
import { useSetAtom } from "jotai";
import { useWindowWidth } from "../hooks/useWindowWidth";
import { usePageName } from "../hooks/usePageName";

//-> mobile width limit constants
const profileAccessorLimit = 700;
const navBarLimit = 1024;

export default function Header() {
  //-> some states
  const [menu, setMenu] = useState(false);
  const windowWidth = useWindowWidth();
  const logedIn = useAtomValue(isLogedIn);
  const page = usePageName();

  //-> close the menu when the page changes
  useEffect(() => {
    setMenu(false);
  }, [page]);

  return (
    <header
      className="text-unselectable flex flex-col items-center justify-between filter-backdrop
                border-b border-solid border-text-200 fixed top-0 left-0 right-0 z-20
            "
    >
      <div className="flex flex-row items-center justify-between w-full h-[4rem] flex-shrink-0 p-3 px-8">
        <h1 className="text-xl font-bold flex flex-1">
          Help<b className="text-primary-600">Me!</b>
        </h1>

        {windowWidth > navBarLimit && <Navbar />}

        <div className="flex flex-1 justify-end gap-5 relative z-50">
          {logedIn && <AccountAccessor />}

          {windowWidth > profileAccessorLimit && !logedIn && (
            <AccountAccessor />
          )}

          <ThemeToggler />

          {menu && windowWidth < navBarLimit ? (
            <Icon
              icon="majesticons:close"
              className="w-8 h-8 active:text-accent-700 cursor-pointer"
              onClick={() => setMenu(false)}
            />
          ) : !menu && windowWidth < navBarLimit ? (
            <Icon
              icon="majesticons:menu-alt-line"
              className="w-8 h-8 active:text-accent-700 cursor-pointer"
              onClick={() => setMenu(true)}
            />
          ) : null}
        </div>
      </div>

      {windowWidth < navBarLimit && (
        <div
          className="px-8 flex flex-col items-center relative justify-center w-full h-[12rem]
                        flex-wrap gap-5 border-t border-transparent transition-all duration-300 overflow-hidden
                        "
          style={
            menu
              ? { height: "fit-content", borderColor: "var(--text-200)" }
              : { height: "0px" }
          }
        >
          <div className="w-full h-full gap-6 flex flex-col justify-center items-center p-8">
            <Navbar />
            {windowWidth < profileAccessorLimit && !logedIn && (
              <AccountAccessor />
            )}
          </div>
        </div>
      )}
    </header>
  );
}

function Navbar() {
  //-> page name
  const page = usePageName();

  return (
    <nav className="flex flex-col lg:flex-row flex-3 gap-3 lg:gap-10 text-lg font-medium ">
      <Link
        to="/"
        className={`flex items-center gap-2 transition-all duration-300 icon-hover ${
          page === "" ? "text-accent-700" : ""
        }`}
      >
        <Icon icon="majesticons:home-simple-line" className="w-6 h-6" />
        <span>Home</span>
      </Link>
      <Link
        to="/questions"
        className={`flex items-center gap-2 transition-all duration-300 icon-hover ${
          page === "questions" ? "text-accent-700" : ""
        }`}
      >
        <Icon
          icon="majesticons:question-mark-circle-line"
          className="w-6 h-6"
        />
        <span>Questions</span>
      </Link>
      <Link
        to="/faq"
        className={`flex items-center gap-2 transition-all duration-300 icon-hover ${
          page === "faq" ? "text-accent-700" : ""
        }`}
      >
        <Icon icon="majesticons:messages-line" className="w-6 h-6" />
        <span>FAQ</span>
      </Link>
    </nav>
  );
}

function ThemeToggler() {
  //-> theme state
  const [theme, setTheme] = useAtom(ThemeAtom);

  // -> effect to change the theme
  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "light")
      document.documentElement.setAttribute("data-theme", "light");
    else document.documentElement.setAttribute("data-theme", "dark");
  }, [theme]);

  return (
    <button
      className="w-6"
      onClick={() =>
        setTheme((theme) => (theme === "light" ? "dark" : "light"))
      }
    >
      {theme === "light" ? (
        <Icon
          icon="majesticons:moon"
          className="w-8 h-8 transition-all duration-300 icon-hover"
        />
      ) : (
        <Icon
          icon="majesticons:sun"
          className="w-8 h-8 transition-all duration-300 icon-hover"
        />
      )}
    </button>
  );
}

function AccountAccessor() {
  //-> login state
  const logedIn = useAtomValue(isLogedIn);

  //-> profile menu state and toggler ref
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  //-> if the user is loged in, render the profile icon and dropdown menu
  //-> else, render the login and signup buttons
  if (logedIn)
    return (
      <button title="button" className="" ref={btnRef} onClick={() => setIsOpen(!isOpen)}>
        <Icon
          icon="majesticons:user-line"
          className="w-8 h-8 transition-all duration-300 icon-hover"
        />
        <DropdownMenu
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          togglerRef={btnRef}
          className="top-16 right-0 rounded-2xl"
        >
          <ProfileMenuContent />
        </DropdownMenu>
      </button>
    );
  else
    return (
      <div className="flex gap-4 flex-wrap justify-center items-center">
        <Button
          variation={1}
          className="w-24 py-1 text-center rounded-3xl bg-[var(--darkcolor)] text-[var(--lightcolor)]"
        >
          <Link to="/login">Login</Link>
        </Button>

        <Button
          variation={2}
          className="w-24 py-1 text-center rounded-3xl bg-[var(--darkcolor)] text-[var(--lightcolor)]"
        >
          <Link to="/signup">Sign up</Link>
        </Button>
      </div>
    );
}

function ProfileMenuContent() {
  //-> profile menu content
  return (
    <div className="cursor-default h-fit bg-background-50 flex flex-col justify-center items-center p-3 border rounded-2xl border-text-200">
      <div className="w-full h-fit my-2 flex flex-row justify-center items-center">
        <span className="h-full w-fit flex justify-center items-center ">
          <Icon icon="majesticons:user-circle" className="w-16 h-16" />
        </span>
        <span className="h-full w-full font-medium flex flex-col justify-center items-start ml-5">
          <h1 className="text-lg">{`${localStorage.getItem("firstName")} ${localStorage.getItem("lastName")}`}</h1>
          <p className="opacity-60 text-[14px]">{`${localStorage.getItem("email")}`}</p>
          <Link
            to="/profile/edit"
            className="flex items-center gap-2 text-text-950 transition-all duration-300 icon-hover"
          >
            <Icon icon="majesticons:pencil" className="w-5 h-5" />
            Edit
          </Link>
        </span>
      </div>

      <hr className="w-[95%] h-2 my-2" />

      <div className="w-full h-fit text-lg font-semibold text-text-950 flex flex-col gap-3">
        <Link
          to="/profile/favorites"
          className="flex gap-2 text-text-950 items-center transition-all duration-300 icon-hover"
        >
          <Icon icon="majesticons:heart-line" className="w-8 h-8" />
          Favorites
        </Link>
        <Link
          to="/profile/history"
          className="flex gap-2 text-text-950 items-center transition-all duration-300 icon-hover"
        >
          <Icon icon="majesticons:clock-line" className="w-8 h-8" />
          History
        </Link>
        <Link
          to="/profile/notifications"
          className="flex gap-2 text-text-950 items-center transition-all duration-300 icon-hover"
        >
          <Icon icon="majesticons:bell-line" className="w-8 h-8" />
          Notifications
        </Link>
        <span
          onClick={() => Logout()}
          className="flex gap-2 text-text-950 items-center transition-all duration-300 cursor-pointer icon-hover"
        >
          <Icon icon="majesticons:logout-line" className="w-8 h-8" />
          Logout
        </span>
      </div>
    </div>
  );
}

export function Logout() {
  // TODO: implement logout
  const logout = useSetAtom(isLogedIn);
  localStorage.removeItem("isLoggedIn");
  logout(false);
}
