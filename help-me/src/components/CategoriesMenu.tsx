import DropdownMenuBase from "./DropdownMenuBase";


type PropsType = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    togglerRef?: React.RefObject<HTMLElement | SVGSVGElement>;
}


const categories =[
    {
        name: "Technology",
        subCategories: [
            "Programming & Development",
            "Artificial Intelligence",
            "Cybersecurity",
            "Hardware & Networking",
            "Software Applications",
            "Emerging Technologies"
        ],
    },
    {
        name: "Technology",
        subCategories: [
            "Programming & Development",
            "Artificial Intelligence",
            "Cybersecurity",
            "Hardware & Networking",
            "Software Applications",
            "Emerging Technologies"
        ],
    },
    {
        name: "Technology",
        subCategories: [
            "Programming & Development",
            "Artificial Intelligence",
            "Cybersecurity",
            "Hardware & Networking",
            "Software Applications",
            "Emerging Technologies"
        ],
    },
    {
        name: "Technology",
        subCategories: [
            "Programming & Development",
            "Artificial Intelligence",
            "Cybersecurity",
            "Hardware & Networking",
            "Software Applications",
            "Emerging Technologies"
        ],
    },
    {
        name: "Technology",
        subCategories: [
            "Programming & Development",
            "Artificial Intelligence",
            "Cybersecurity",
            "Hardware & Networking",
            "Software Applications",
            "Emerging Technologies"
        ],
    },
    {
        name: "Technology",
        subCategories: [
            "Programming & Development",
            "Artificial Intelligence",
            "Cybersecurity",
            "Hardware & Networking",
            "Software Applications",
            "Emerging Technologies"
        ],
    },
]


export default function CategoriesMeny({
    isOpen,
    setIsOpen,
    togglerRef,
}: PropsType) {
    return(
        <DropdownMenuBase   
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            togglerRef={togglerRef}
            className="top-16 left-0 rounded-2xl"
        >
            <CategoriesMenuContent />
        </DropdownMenuBase>
    );
}



function CategoriesMenuContent() {


    //-> Filter menu content
    return(
        <div
            className="relative cursor-default w-[300px] h-[400px] overflow-y-scroll
                bg-background-50 flex flex-col justify-start items-center border
                rounded-2xl border-text-200
            "
        >
            <span className="sticky top-0 filter-backdrop z-10 p-3 border-b border-text-200 text-left w-full">
                Categories
                <input 
                    type="text"
                    placeholder="Search for categories"
                    className="w-full h-8 p-2 mt-3 mb-1 text-sm border border-text-200
                        bg-background-50 rounded-lg outline-none focus:border-primary-600
                        hover:border-background-300 transition-all duration-300
                    "
                />
            </span>
            <div className="w-full h-fit flex flex-col text-left gap-3 p-3 ">
                {categories.map((category, index) => {return(
                    <span key={index} className="w-full flex flex-col gap-4 items-center justify-start">
                        <p className="opacity-70 font-semibold">{category.name}</p>
                        <ul className="space-y-1">
                            {
                                category.subCategories.map((subCategory, index) => 
                                    <li key={index} className="text-hover cursor-pointer">{subCategory}</li>
                            )}
                        </ul>
                    </span>
                )})}
            </div>
        </div>
    );
}


function search(query: string, items: string[]): string[] {

    const normalizedQuery = query.toLowerCase();
    const results = items.filter(item => item.toLowerCase().includes(normalizedQuery));
    return results;
}