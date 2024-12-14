
import QuestionCard from "../components/QuestionCard";
import Question from "../types/Question";


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


const Questions = () => {


    return <>
    

        <section className="flex flex-col gap-5 w-full items-center">
            {questions.map((question, index) => <QuestionCard key={index} question={question} />)}
        </section>

        

    </>
};

  
export default Questions;