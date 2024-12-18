import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [expandedDiv, setExpandedDiv] = useState(false);
  return (
    <footer
      className="flex flex-col items-center justify-between filter-backdrop
      border-t border-solid border-text-200 p-6 bottom-0 left-0 right-0"
    >
      <div className="flex flex-row gap-5">
        <button
          title="button"
          className="hover:opacity-80 transition-all duration-100"
          onClick={() => setExpandedDiv((prev) => !prev)}
        >
          <Icon
            className="w-6 h-6"
            icon={`material-symbols:arrow-circle-${
              expandedDiv ? "up" : "down"
            }-rounded`}
          ></Icon>
        </button>
        <p className="text-center">
          Crafted with love by a team of passionate creators &#169;{" "}
          {new Date().getFullYear()}
        </p>
        <Link
          className="flex justify-center items-center gap-1 min-w-fit hover:text-text-500 duration-100"
          to="https://github.com/Help-me-website"
          target="_blank"
        >
          <Icon className="w-5 h-5" icon={"mdi:github"}></Icon>
          Organization Link
        </Link>
      </div>
      {expandedDiv && (
        <div>
          <h1 className="text-4xl text-center text-primary-500 m-6">Team Members</h1>
          <ul className="grid grid-cols-2 sm:grid-cols-4 justify-between gap-x-4 gap-y-2 text-center">
            <li className="hover:text-text-500 duration-100">
              <Link to={"https://github.com/ahmedelsherbiny0"} target="_blank">Ahmed Elsherbiny</Link>
            </li>
            <li className="hover:text-text-500 duration-100">
              <Link to={"https://github.com/ayman-yasser"} target="_blank">Ayman Yasser</Link>
            </li>
            <li className="hover:text-text-500 duration-100">
              <Link to={"https://github.com/HamdiEmad"} target="_blank">Hamdi Emad</Link>
            </li>
            <li className="hover:text-text-500 duration-100">
              <Link to={"https://github.com/HazemHHHH"} target="_blank">Hazem Radwan</Link>
            </li>
            <li className="hover:text-text-500 duration-100">
              <Link to={"https://github.com/OmarSalamaDev"} target="_blank">Omar Salama</Link>
            </li>
            <li className="hover:text-text-500 duration-100">
              <Link to={"https://github.com/Mazen-Yasser-10"} target="_blank">Mazen Mashaal</Link>
            </li>
            <li className="hover:text-text-500 duration-100">
              <Link to={"https://github.com/mohamedadel96e"} target="_blank">Mohamed Ahmed</Link>
            </li>
            <li className="hover:text-text-500 duration-100">
              <Link to={"https://github.com/mohamed-295"} target="_blank">Mohamed Adel</Link>
            </li>
          </ul>
        </div>
      )}
    </footer>
  );
}

