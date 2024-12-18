import DropdownMenuBase from "./DropdownMenuBase";
import { categories } from "../categories";


type PropsType = {
    isOpen?: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    togglerRef?: React.RefObject<HTMLElement | SVGSVGElement>;
    setCategory?: React.Dispatch<React.SetStateAction<string>>;
}


// const categories =[
//     {
//         name: "Technology",
//         subCategories: [
//             "Programming & Development",
//             "Artificial Intelligence",
//             "Cybersecurity",
//             "Hardware & Networking",
//             "Software Applications",
//             "Emerging Technologies"
//         ],
//     },
//     {
//         name: "Technology",
//         subCategories: [
//             "Programming & Development",
//             "Artificial Intelligence",
//             "Cybersecurity",
//             "Hardware & Networking",
//             "Software Applications",
//             "Emerging Technologies"
//         ],
//     },
//     {
//         name: "Technology",
//         subCategories: [
//             "Programming & Development",
//             "Artificial Intelligence",
//             "Cybersecurity",
//             "Hardware & Networking",
//             "Software Applications",
//             "Emerging Technologies"
//         ],
//     },
//     {
//         name: "Technology",
//         subCategories: [
//             "Programming & Development",
//             "Artificial Intelligence",
//             "Cybersecurity",
//             "Hardware & Networking",
//             "Software Applications",
//             "Emerging Technologies"
//         ],
//     },
//     {
//         name: "Technology",
//         subCategories: [
//             "Programming & Development",
//             "Artificial Intelligence",
//             "Cybersecurity",
//             "Hardware & Networking",
//             "Software Applications",
//             "Emerging Technologies"
//         ],
//     },
//     {
//         name: "Technology",
//         subCategories: [
//             "Programming & Development",
//             "Artificial Intelligence",
//             "Cybersecurity",
//             "Hardware & Networking",
//             "Software Applications",
//             "Emerging Technologies"
//         ],
//     },
// ]


export default function CategoriesMeny({
    isOpen = false,
    togglerRef,
    setIsOpen = () => {},
    setCategory = () => {},
}: PropsType) {
    return(
        <DropdownMenuBase   
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            togglerRef={togglerRef}
            className="top-16 left-0 rounded-2xl"
        >
            <CategoriesMenuContent 
                setCategory={setCategory}
                setIsOpen={setIsOpen}
            />
        </DropdownMenuBase>
    );
}



function CategoriesMenuContent({
    setCategory = () => {}, 
    setIsOpen = () => {} }: PropsType
) {


    //-> Filter menu content
    return(
        <div
            className="relative cursor-default w-[200px] h-fit
                bg-background-50 flex flex-col justify-start items-center border
                rounded-2xl border-text-200
            "
        >
            <span className="sticky top-0 filter-backdrop z-10 p-3 border-b border-text-200 text-left w-full">
                Categories
                {/* <input 
                    type="text"
                    placeholder="Search for categories"
                    className="w-full h-8 p-2 mt-3 mb-1 text-sm border border-text-200
                        bg-background-50 rounded-lg outline-none focus:border-primary-600
                        hover:border-background-300 transition-all duration-300
                    "
                /> */}
            </span>
            <div className="w-full h-fit flex flex-col text-left gap-3 p-3 ">
                {categories.map((category, index) => {return(
                    <span key={index} className="w-full flex flex-col gap-4 items-center justify-start">
                        <p
                            className="text-left w-full text-hover cursor-pointer"
                            onClick={() => {
                                setIsOpen(false);
                                setCategory(category.name);
                                console.log(category.name);
                            }}
                        >
                            {category.full}
                        </p>
                    </span>
                )})}
            </div>
        </div>
    );
}


// function search(query: string, items: string[]): string[] {

//     const normalizedQuery = query.toLowerCase();
//     const results = items.filter(item => item.toLowerCase().includes(normalizedQuery));
//     return results;
// }