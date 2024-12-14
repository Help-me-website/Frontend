import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { isLogedIn, ThemeAtom } from "../atoms";

import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import DropdownMenu from "./DropdownMenu";
import { useWindowWidth } from "../hooks/useWindowWidth";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const windowWidth = useWindowWidth();
  console.log(windowWidth);

  return (
    <header
      className="text-unselectable flex flex-col items-center justify-between filter-backdrop border-b border-solid border-text-200 fixed top-0 left-0 right-0 z-10 overflow-hidden transition-all duration-300"
      style={menu ? { height: "max-content" } : { height: "70px" }}
    >
      <div className="flex flex-row items-center justify-between w-full h-[70px] flex-shrink-0 p-3 px-10p-3 px-10">
        <h1 className="text-xl font-bold italic flex flex-1">Help-me!</h1>

        {windowWidth > 768 && <Navbar />}

        <div className="flex flex-1 justify-end gap-5 relative z-50">
          {windowWidth > 768 && <AccountAccessor />}

          {windowWidth > 768 && <ThemeToggler />}

          {menu && windowWidth < 768 ? (
            <Icon
              icon="majesticons:close"
              className="w-8 h-8 active:text-accent-700 cursor-pointer"
              onClick={() => setMenu(false)}
            />
          ) : !menu && windowWidth < 768 ? (
            <Icon
              icon="majesticons:menu-alt-line"
              className="w-8 h-8 active:text-accent-700 cursor-pointer"
              onClick={() => setMenu(true)}
            />
          ) : null}
        </div>
      </div>

      <div className="p-3 px-10 flex flex-col items-center relative justify-center w-full h-[200px] flex-wrap gap-5 border-t border-solid border-text-200">
        <MobileNavbar />
        <AccountAccessor />
        <ThemeToggler />
      </div>
    </header>
  );
}

function Navbar() {
  //-> page name
  const page = useLocation().pathname.split("/")[1];

  return (
    <nav className="flex flex-row flex-3 gap-10 text-lg font-medium">
      <Link
        to="/"
        className={`flex items-center gap-2 transition-all duration-300 hover:text-accent-700 ${
          page === "" ? "text-accent-700" : ""
        }`}
      >
        <Icon icon="majesticons:home-simple-line" className="w-6 h-6" />
        <span>Home</span>
      </Link>
      <Link
        to="/questions"
        className={`flex items-center gap-2 transition-all duration-300 hover:text-accent-700 ${
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
        className={`flex items-center gap-2 transition-all duration-300 hover:text-accent-700 ${
          page === "faq" ? "text-accent-700" : ""
        }`}
      >
        <Icon icon="majesticons:messages-line" className="w-6 h-6" />
        <span>FAQ</span>
      </Link>
    </nav>
  );
}

function MobileNavbar() {
  //-> page name
  const page = useLocation().pathname.split("/")[1];

  return (
    <nav className="flex flex-col flex-3 gap-2 text-lg font-medium">
      <Link
        to="/"
        className={`flex items-center gap-2 transition-all duration-300 active:text-accent-700 ${
          page === "" ? "text-accent-700" : ""
        }`}
      >
        <Icon icon="majesticons:home-simple-line" className="w-6 h-6" />
        <span>Home</span>
      </Link>
      <Link
        to="/questions"
        className={`flex items-center gap-2 transition-all duration-300 active:text-accent-700 ${
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
        className={`flex items-center gap-2 transition-all duration-300 active:text-accent-700 ${
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
  //-> theme atom
  const [theme, setTheme] = useAtom(ThemeAtom);

  //-> effect to change the theme
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
        setTheme((prev: string) => (prev === "light" ? "dark" : "light"))
      }
    >
      {theme === "light" ? (
        <Icon
          icon="majesticons:moon"
          className="w-8 h-8 transition-all duration-300 hover:text-accent-700"
        />
      ) : (
        <Icon
          icon="majesticons:sun"
          className="w-8 h-8 transition-all duration-300 hover:text-accent-700"
        />
      )}
    </button>
  );
}

function AccountAccessor() {
  //-> login atom
  const logedIn = useAtomValue(isLogedIn);

  //-> profile menu state
  const [isOpen, setIsOpen] = useState(true);
  const btnRef = useRef<HTMLButtonElement>(null);

  if (logedIn)
    return (
      <button
        className="relative"
        ref={btnRef}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon
          icon="majesticons:user-line"
          className="w-8 h-8 transition-all duration-300 hover:text-accent-700"
        />
        <DropdownMenu
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          togglerRef={btnRef}
          className="top-14 right-1/2 rounded-2xl"
        >
          <ProfileMenuContent />
        </DropdownMenu>
      </button>
    );
  else
    return (
      <div className="flex gap-4">
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
  return (
    <div className="cursor-default w-[250px] h-fit bg-background-50 flex flex-col justify-center items-center p-3 border rounded-2xl border-text-200">
      <div className="w-full h-fit my-2 flex flex-row justify-center items-center">
        <span className="h-full w-fit flex justify-center items-center ">
          <Icon icon="majesticons:user-circle" className="w-16 h-16" />
        </span>
        <span className="h-full w-full font-medium flex flex-col justify-center items-start ml-5">
          <h1>omarsalama550</h1>
          <p className="opacity-60">Omar Salama</p>
          <Link
            to="/profile/edit"
            className="flex items-center gap-2 text-text-950 transition-all duration-300 hover:text-accent-700"
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
          className="flex gap-2 text-text-950 items-center transition-all duration-300 hover:text-accent-700"
        >
          <Icon icon="majesticons:heart-line" className="w-8 h-8" />
          Favorites
        </Link>
        <Link
          to="/profile/history"
          className="flex gap-2 text-text-950 items-center transition-all duration-300 hover:text-accent-700"
        >
          <Icon icon="majesticons:clock-line" className="w-8 h-8" />
          History
        </Link>
        <Link
          to="/profile/notifications"
          className="flex gap-2 text-text-950 items-center transition-all duration-300 hover:text-accent-700"
        >
          <Icon icon="majesticons:bell-line" className="w-8 h-8" />
          Notifications
        </Link>
        <span
          onClick={() => Logout()}
          className="flex gap-2 text-text-950 items-center transition-all duration-300 hover:text-accent-700"
        >
          <Icon icon="majesticons:logout-line" className="w-8 h-8" />
          Logout
        </span>
      </div>
    </div>
  );
}

function Logout() {
  const logout = useSetAtom(isLogedIn);
  localStorage.removeItem("isLoggedIn");
  logout(false);
}
