/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useRef } from "react";


type PropsType = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
    togglerRef?: React.RefObject<HTMLElement | SVGSVGElement>;
    className?: string;
}


export default function DropdownMenuBase({
    isOpen,
    setIsOpen,
    children,
    className = "",
    togglerRef,
}: PropsType) {


    //-> ref to the menu
    const menuRef = useRef<HTMLDivElement>(null);


    //-> handler to close the menu when clicked outside
    const handleClickOutside = (event: MouseEvent) => {
        //-> if the menu is open and the clicked element is not the menu, close the menu
        if (menuRef.current &&
            !menuRef.current.contains(event.target as Node) &&
            !togglerRef?.current?.contains(event.target as Node)
        ) setIsOpen(false);
    };


    //-> event listener for the handler above
    useEffect(() => {
        if (menuRef) document.addEventListener("mousedown", handleClickOutside);
        else document.removeEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []); //-> stubid React shity warning >_<


    return(        
        <div
            className={`text-unselectable w-max outline-none
                shadow-lg transition-all duration-300 flex flex-col justify-start
                items-center overflow-hidden absolute z-50 ${className}
            `}
            style={isOpen ? { height: "max-content", borderColor: "var(--text-500)" } : { height: "0px", borderColor: "transparent" }}
            ref={menuRef}
            role="menu"
            tabIndex={-1}
            onClick={(e) => e.stopPropagation()}
        >
            {children}
        </div>


    );
};