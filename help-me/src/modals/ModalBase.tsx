/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useRef } from "react";


type PropsType = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
    togglerRef?: React.RefObject<HTMLElement | SVGSVGElement>;
    className?: string;
}


export default function ModalBase({
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
        // <div
        //     // className={`w-[80vw] h-[300px] fixed inset-0 z-50 flex justify-center items-center
        //     //     outline-none bg-background-700
        //     //     shadow-lg transition-all duration-300 overflow-hidden ${className}
        //     // `}
        //     className="fixed inset-0 z-50 flex justify-center items-center py-10 bg-[rgba(46,51,50,0.7)]"
        //     ref={menuRef}
        //     role="menu"
        //     aria-hidden={!isOpen}
        //     tabIndex={-1}
        //     onClick={(e) => e.stopPropagation()}
        // >
        //     {children}
        // </div>
        <div className="fixed inset-0 z-50 flex justify-center items-center py-10 bg-[rgba(46,51,50,0.7)]">
        <div ref={menuRef} className="flex justify-center items-center w-full h-fit">
            {children}
        </div>
        <div className="hidden md:block w-[280px] h-full shrink-0" />
        </div>


    );
};