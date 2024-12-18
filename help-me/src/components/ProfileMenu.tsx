import { Icon } from "@iconify/react/dist/iconify.js";
import DropdownMenuBase from "./DropdownMenuBase";
import { Link } from "react-router-dom";
import { useSetAtom } from "jotai";
import { isLogedIn, showLogoutModal } from "../atoms";

type PropsType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  togglerRef?: React.RefObject<HTMLElement | SVGSVGElement>;
};

export default function ProfileMenu({
  isOpen,
  setIsOpen,
  togglerRef,
}: PropsType) {
  return (
    <DropdownMenuBase
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      togglerRef={togglerRef}
      className="top-16 right-0 rounded-2xl"
    >
      <ProfileMenuContent />
    </DropdownMenuBase>
  );
}

function ProfileMenuContent() {
  //-> profile menu content
  const logoutModal = useSetAtom(showLogoutModal);

  return (
    <div className="cursor-default w-[320px] h-fit bg-background-50 flex flex-col justify-center items-center p-3 border rounded-2xl border-text-200">
      <div className="w-full h-fit my-2 flex flex-row justify-center items-center">
        <span className="h-full w-fit flex justify-center items-center ">
          <Icon icon="majesticons:user-circle" className="w-16 h-16" />
        </span>
        <span className="h-full w-full font-medium flex flex-col justify-center items-start ml-5">
          <h1>{`${localStorage.getItem("firstName")} ${localStorage.getItem(
            "lastName"
          )}`}</h1>
          <p className="opacity-60 text-sm whitespace-nowrap overflow-hidden text-ellipsis max-w-[200px]">
            {`${localStorage.getItem("email")}`}
          </p>

          <Link
            to="/profile/edit"
            className="flex items-center gap-2 text-text-950 transition-all duration-300 icon-hover"
          >
            <Icon icon="majesticons:pencil" className="w-5 h-5" />
            Edit
          </Link>
        </span>
      </div>

      <hr className="w-full h-2 my-2" />

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
            onClick={() => logoutModal(true)}
            className="flex gap-2 text-text-950 items-center transition-all duration-300 cursor-pointer icon-hover"
          >
            <Icon icon="majesticons:logout-line" className="w-8 h-8" />
            Logout
          </span>
      </div>
    </div>
  );
}

function Logout() {
  // TODO: implement logout
  const logout = useSetAtom(isLogedIn);
  localStorage.removeItem("isLoggedIn");
  logout(false);
}
