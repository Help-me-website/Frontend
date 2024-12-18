import { Icon } from "@iconify/react/dist/iconify.js";

import QuestionCard from "../components/QuestionCard";
import SearchBar from "../components/SearchBar";
import Question from "../types/Question";
import Button from "../components/Button";
import { useRef, useState } from "react";
import CategoriesMenu from "../components/CategoriesMenu";
import SortMenu from "../components/SortMenu";
import FilterMenu from "../components/FilterMenu";
import AddQuestionModal from "../modals/AddQuestionModal";
import { AddQuestionModalAtom } from "../atoms";
import { useAtom } from "jotai";


const questions: Question[] = [
    {
        id: 1,
        title: "How to implement a binary search algorithm?",
        description: "I'm trying to understand how binary search works. Can someone provide a clear example?",
        categories: ["Algorithms", "JavaScript"],
        author: "CodeLearner",
        isVarified: true,
        views: 120,
        votes: 25,
        replies: 5,
        date: "2024-12-10",
    },
    {
        id: 2,
        title: "What is the difference between let and var in JavaScript?",
        description: "I'm confused about when to use let and var. Can someone explain?",
        categories: ["JavaScript", "ES6"],
        author: "JSNerd",
        isVarified: false,
        views: 300,
        votes: 45,
        replies: 8,
        date: "2024-12-08",
    },
    {
        id: 3,
        title: "Best practices for REST API design?",
        description: "What are some best practices for designing a RESTful API?",
        categories: ["API", "Web Development"],
        author: "API_Guru",
        isVarified: true,
        views: 500,
        votes: 80,
        replies: 15,
        date: "2024-12-07",
    },
    {
        id: 4,
        title: "How to optimize React rendering?",
        description: "My React app is rendering slowly. What steps can I take to improve its performance?",
        categories: ["React", "Optimization"],
        author: "FrontendFanatic",
        isVarified: false,
        views: 220,
        votes: 60,
        replies: 12,
        date: "2024-12-09",
    },
    {
        id: 5,
        title: "What is the purpose of Docker containers?",
        description: "Can someone explain why Docker containers are used and how they differ from virtual machines?",
        categories: ["Docker", "DevOps"],
        author: "CloudExpert",
        isVarified: true,
        views: 400,
        votes: 95,
        replies: 20,
        date: "2024-12-06",
    },
];        



export default function Questions() {


    return <main className="w-full flex flex-col gap-3 items-center">
    
        <div className="w-full p-2 px-5 flex flex-row gap-x-8 gap-y-3 flex-wrap items-center justify-center fixed py-4 top-[4rem] z-10 filter-backdrop border-b border-text-200">
            <h1 className="hidden md:inline text-lg font-bold text-nowrap text-unselectable">Questions (5)</h1>
                <SearchBar />
            <span className="flex flex-row gap-x-8 gap-3 flex-wrap items-center justify-center">
                <CategoriesBtn />
                <FilterBtn />
                <SortBtn />
                <AddQuestionBtn />
            </span>
        </div>

        <section className="flex flex-col gap-5 w-full justify-center items-center mt-32 xl:mt-20">
            {questions.map((question, index) => <QuestionCard key={index} question={question} />)}
        </section>


    </main>
};


function FilterBtn() {


    //-> menu state and toggler ref
    const [isOpen, setIsOpen] = useState(false);
    const btnRef = useRef<HTMLButtonElement>(null);
    

    return<>
        <button 
            className="relative"
            ref={btnRef}
            onClick={() => setIsOpen(!isOpen)}
        >
            <span className="flex gap-2 items-center font-semibold transition-all duration-300 icon-hover">
                <Icon icon="majesticons:filter-line" className="w-6 h-6" />
                <p className="hidden md:inline">Filter</p>
            </span>
            <FilterMenu   
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                togglerRef={btnRef}
            />
        </button>
    </>
}


function SortBtn() {


    //-> menu state and toggler ref
    const [isOpen, setIsOpen] = useState(false);
    const btnRef = useRef<HTMLButtonElement>(null);


    return<>
        <button
            className="relative"
            ref={btnRef}
            onClick={() => setIsOpen(!isOpen)}
        >
            <span className="flex gap-2 items-center font-semibold transition-all duration-300 icon-hover">
                <Icon icon="majesticons:sort-vertical" className="w-6 h-6" />
                <p className="hidden md:inline">Sort</p>
            </span>
            <SortMenu   
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                togglerRef={btnRef}
            />
        </button>
    </>
}


function CategoriesBtn() {


    //-> menu state and toggler ref
    const [isOpen, setIsOpen] = useState(false);
    const btnRef = useRef<HTMLButtonElement>(null);


    return<>
        <button
            className="relative"
            ref={btnRef}
            onClick={() => setIsOpen(!isOpen)}
        >
            <span className="flex gap-2 items-center font-semibold transition-all duration-300 icon-hover">
                <Icon icon="majesticons:applications-line" className="w-6 h-6" />
                <p className="hidden md:inline">Categories</p>
            </span>
            <CategoriesMenu   
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                togglerRef={btnRef}
            />
        </button>
    </>
}


function AddQuestionBtn() {

    const [isOpen, setIsOpen] = useAtom(AddQuestionModalAtom);

    return<>
        <Button
            variation={1}
            className="flex gap-2 items-center text-nowrap px-3 py-2"    
            onClick={() => setIsOpen(true)}
        >
            <Icon icon="majesticons:plus-circle" className="w-6 h-6" />
            <p className="hidden md:inline">Add Question</p>
        </Button>
        <AddQuestionModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        {/* { isOpen &&
            // <AddQuestionModal togglerRef={btnRef} isOpen={isOpen} setIsOpen={setIsOpen} />
            <ModalBase togglerRef={btnRef} isOpen={isOpen} setIsOpen={setIsOpen}>
                <p>4</p>
            </ModalBase>
        } */}
    </>
}





