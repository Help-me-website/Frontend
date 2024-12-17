import { Icon } from "@iconify/react/dist/iconify.js";
import { useRef } from "react";

export default function SearchBar() {


    const searchRef = useRef<HTMLInputElement>(null);


    return (
        <div
            className="
                flex flex-row items-center gap-2 w-[90%] max-w-[500px] h-10 bg-accent-50
                border border-text-200 rounded-xl px-2 text-sm transition-all duration-300
                focus-within:bg-primary-100 focus-within:border-primary-600 hover:border-background-300
            "
        >
            <button
                className="
                    w-6 h-6 bg-transparent text-text-950 outline-none
                    cursor-pointer
                "
                onClick={(e) => {
                    e.stopPropagation();
                    search(searchRef.current?.value.split(" ") || []);
                }}
            >
                <Icon
                    icon="majesticons:search-line"
                    className="w-6 h-6 hover:text-primary-600 cursor-pointer transition-all duration-300 icon-hover active:scale-105"
                />
            </button>
            <input
                type="search"
                placeholder="Search"
                className="w-full h-full bg-transparent text-text-950 outline-none cursor-text"
                onKeyDown={(e) => e.key === "Enter" && search(searchRef.current?.value.split(" ") || [])}
                ref={searchRef}
            />
        </div>
    );
}


function search(keywords: string[]) {
    console.log(keywords);
}