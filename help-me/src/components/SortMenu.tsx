import DropdownMenuBase from "./DropdownMenuBase";
import RadioBtn from "./RadioBtn";


type PropsType = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    togglerRef?: React.RefObject<HTMLElement | SVGSVGElement>;
}


export default function SortMenu({
    isOpen,
    setIsOpen,
    togglerRef,
}: PropsType) {
    return(
        <DropdownMenuBase   
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            togglerRef={togglerRef}
            className="top-16 right-0 rounded-2xl"
        >
            <SortMenuContent />
        </DropdownMenuBase>
    );
}


function SortMenuContent() {


    //-> Filter menu content
    return(
        <div className="cursor-default w-[200px] h-fit bg-background-50 flex flex-col
                justify-center items-centerp-3 border rounded-2xl border-text-200
            "
        >
            <span className="text-left w-full p-3 border-b border-text-200">Sort</span>
            <div className="w-full h-fit flex flex-col gap-3 p-3">
                <span className="w-full flex gap-4 items-center justify-start">
                    <RadioBtn id="sort_N" name="sort" />
                    <label htmlFor="sort_N" className="cursor-pointer text-hover">Newest</label>
                </span>
                <span className="w-full flex gap-4 items-center justify-start">
                    <RadioBtn id="sort_O" name="sort" />
                    <label htmlFor="sort_O" className="cursor-pointer text-hover">Oldest</label>
                </span>
                <span className="w-full flex gap-4 items-center justify-start">
                    <RadioBtn id="sort_M" name="sort" />
                    <label htmlFor="sort_M" className="cursor-pointer text-hover">Most Viewed</label>
                </span>
                <span className="w-full flex gap-4 items-center justify-start">
                    <RadioBtn id="sort_L" name="sort" />
                    <label htmlFor="sort_L" className="cursor-pointer text-hover">Least Viewed</label>
                </span>
            </div>
        </div>
    );
}

