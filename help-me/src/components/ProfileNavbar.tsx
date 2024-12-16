import { Link, useLocation} from "react-router-dom";

export default function ProfileNavbar() {
  const loc = useLocation();
  const page = loc.pathname.split("/")[2] || "";

  return (
    <nav className="flex flex-row flex-wrap mt-3 mb-6 mx-auto w-fit text-sm sm:text-lg font-medium border-background-500 border-2 rounded-3xl">
      <Link
        to="/profile/edit"
        className={`flex items-center px-5 sm:px-8 py-2 transition-all duration-300 icon-hover rounded-l-3xl ${
          page === "edit" ? "bg-background-500" : ""
        }`}
      >
        <span>Edit</span>
      </Link>
      <Link
        to="/profile/favorites"
        className={`flex items-center px-5 sm:px-8 py-2 transition-all duration-300 icon-hover ${
          page === "favorites" ? "bg-background-500" : ""
        }`}
      >
        <span>Favorite</span>
      </Link>
      <Link
        to="/profile/history"
        className={`flex items-center px-5 sm:px-8 py-2 transition-all duration-300 icon-hover ${
          page === "history" ? "bg-background-500" : ""
        }`}
      >
        <span>History</span>
      </Link>
      <Link
        to="/profile/notifications"
        className={`flex items-center px-5 sm:px-8 py-2 transition-all duration-300 icon-hover rounded-r-3xl ${
          page === "notifications" ? "bg-background-500" : ""
        }`}
      >
        <span>Notifications</span>
      </Link>
    </nav>
  );
}
