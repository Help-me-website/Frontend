import Checkbox from "./Checkbox";
import DropdownMenuBase from "./DropdownMenuBase";


type PropsType = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    togglerRef?: React.RefObject<HTMLElement | SVGSVGElement>;
}


export default function FilterMenu({
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
            <FilterMenuContent />
        </DropdownMenuBase>
    );
}


function FilterMenuContent() {


    //-> Filter menu content
    return(
        <div className="cursor-default w-[200px] h-fit bg-background-50 flex flex-col
                justify-center items-center border rounded-2xl border-text-200 
            "
        >
            <span className="text-left w-full p-3 border-b border-text-200">Filter</span>
            <div className="w-full h-fit flex flex-col gap-3 p-3">
                <span className="w-full flex gap-4 items-center justify-start">
                    <Checkbox id="answered" name="answered" />
                    <label htmlFor="answered" className="cursor-pointer text-hover">Answerd</label>
                </span>
                <span className="w-full flex gap-4 items-center justify-start">
                    <Checkbox id="unanswered" name="unanswered" />
                    <label htmlFor="unanswered" className="cursor-pointer text-hover">Unanswered</label>
                </span>
            </div>
        </div>
    );
}


