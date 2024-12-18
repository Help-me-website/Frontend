import { Icon } from "@iconify/react/dist/iconify.js";
import QuestionCard from "../components/QuestionCard";
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";
import { useRef, useState, useEffect } from "react";
import CategoriesMenu from "../components/CategoriesMenu";
import SortMenu from "../components/SortMenu";
import FilterMenu from "../components/FilterMenu";
import AddQuestionModal from "../modals/AddQuestionModal";
import { AddQuestionModalAtom } from "../atoms";
import { useAtom } from "jotai";
import Question from "../types/Question";

export default function Questions() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("http://localhost:8080/home/questions/all");
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setQuestions(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <main className="w-full flex flex-col gap-3 items-center mb-16">
      {/* Header with actions */}
      <div className="w-full p-2 px-5 flex flex-row gap-x-8 gap-y-3 flex-wrap items-center justify-center fixed py-4 top-[4rem] z-10 filter-backdrop border-b border-text-200">
        <h1 className="hidden md:inline text-lg font-bold text-nowrap text-unselectable">
          Questions ({questions.length})
        </h1>
        <SearchBar />
        <span className="flex flex-row gap-x-8 gap-3 flex-wrap items-center justify-center">
          <CategoriesBtn />
          <FilterBtn />
          <SortBtn />
          <AddQuestionBtn />
        </span>
      </div>

      {/* Questions Section */}
      <section className="flex flex-col gap-5 w-full justify-center items-center mt-32 xl:mt-20">
        {loading ? (
          <p>Loading questions...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : questions.length === 0 ? (
          <p>No questions found.</p>
        ) : (
          questions.map((question) => (
            <QuestionCard key={question.id} question={question} />
          ))
        )}
      </section>
    </main>
  );
}

// Filter Button
function FilterBtn() {
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <button
        className="relative"
        ref={btnRef}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex gap-2 items-center font-semibold transition-all duration-300 icon-hover">
          <Icon icon="majesticons:filter-line" className="w-6 h-6" />
          <p className="hidden md:inline">Filter</p>
        </span>
        <FilterMenu isOpen={isOpen} setIsOpen={setIsOpen} togglerRef={btnRef} />
      </button>
    </>
  );
}

// Sort Button
function SortBtn() {
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <button
        className="relative"
        ref={btnRef}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex gap-2 items-center font-semibold transition-all duration-300 icon-hover">
          <Icon icon="majesticons:sort-vertical" className="w-6 h-6" />
          <p className="hidden md:inline">Sort</p>
        </span>
        <SortMenu isOpen={isOpen} setIsOpen={setIsOpen} togglerRef={btnRef} />
      </button>
    </>
  );
}

// Categories Button
function CategoriesBtn() {
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <>
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
  );
}

// Add Question Button
function AddQuestionBtn() {
  const [isOpen, setIsOpen] = useAtom(AddQuestionModalAtom);

  return (
    <>
      <Button
        variation={1}
        className="flex gap-2 items-center text-nowrap px-3 py-2"
        onClick={() => setIsOpen(true)}
      >
        <Icon icon="majesticons:plus-circle" className="w-6 h-6" />
        <p className="hidden md:inline">Add Question</p>
      </Button>
      <AddQuestionModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
