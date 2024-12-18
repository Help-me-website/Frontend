import 'react-quill/dist/quill.snow.css';
import { Icon } from "@iconify/react/dist/iconify.js";
import QuestionFull from '../types/QuestionFull';
import AnswerDTO from '../types/Answer';
import Button from '../components/Button';
import { useEffect, useState } from 'react';
import Question from '../types/Question';

export default function Answer() {
    const [answers, setAnswers] = useState<AnswerDTO[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchAnswers = async () => {
            try {
                const response = await fetch("http://localhost:8080/home/answers/all");
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const data: AnswerDTO[] = await response.json();
                setAnswers(data);
                console.log(data); 
                console.log(answers)
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
    
        fetchAnswers();
    }, []);
    


    
    return (
        <main className="m-auto w-[90vw] max-w-[900px] border border-text-200 rounded-xl p-3 flex flex-col justify-center items-start gap-1 mt-3">
            <section className="flex flex-col gap-2 items-start">
                <h1 className="text-xl font-bold">
                    {question.title}
                </h1>

                <p className="text-sm opacity-50">
                    By <b>{question.firstName} {question.lastName}</b> in {question.category}
                </p>

                <p className="text-base">
                    {question.content}
                </p>

                <div className="flex flex-row gap-4 mt-2 flex-wrap text-text-400 text-unselectable">
                    <span className="text-base font-medium text-bg-shade-3 flex gap-1 items-center justify-center">
                        <Icon icon="majesticons:plus-circle-line" className="w-6 h-6" />
                        {question.votes}
                    </span>

                    <span className="text-base font-medium text-bg-shade-3 flex gap-1 items-center justify-center">
                        <Icon icon="majesticons:eye-line" className="w-6 h-6" />
                        {question.views}
                    </span>

                    <span className="text-base font-medium text-bg-shade-3 flex gap-1 items-center justify-center">
                        <Icon icon="majesticons:comment-line" className="w-6 h-6" />
                        {question.answers.length}
                    </span>
                </div>
            </section>

            <hr className="text-text-500 my-3 w-full" />
            <h3 className="text-xl font-bold">Answers</h3>

            <section className="flex flex-col gap-3 items-start">
                {question.answers.map((answer, index) => <AnswerCard key={index} answer={answer} />)}
            </section>
        </main>
    );
    function AnswerCard({ answer }: { answer: AnswerDTO }) {
        return (
            <div className="w-full bg-accent-50 border border-text-200 rounded-xl p-3 flex flex-col justify-center items-start gap-1">
    {answers
        .filter((ans) => ans.questionId === question.id)
        .map((ans, index) => (
            <div key={index} className="w-full">
                <span className="text-sm opacity-50 flex gap-2 items-center mb-1">
                    <Icon icon="majesticons:user-circle" className="w-6 h-6" />
                    <p>By <b>User ID: {ans.userId}</b></p>
                </span>
                <h1>{ans.content}</h1>
                {ans.isAccepted && (
                    <span className="text-green-500 font-bold mt-1">Accepted Answer</span>
                )}
                <span className="mt-3 py-2 w-fit flex gap-2 text-text-500 text-unselectable text-hover cursor-pointer">
                    <Icon icon="majesticons:comment-line" className="w-6 h-6" />
                    Comment
                </span>1
            </div>
        ))}
</div>

        );
    }
}

const question: QuestionFull = {
    id: 1,
    title: "How to implement a binary search algorithm?",
    category: "Algorithms",
    firstName: "Omar",
    lastName: "shalaby",
    content: "I'm trying to understand how binary search works. Can someone provide a clear example?",
    views: 120,
    votes: 25,
    createdAt: "2024-12-10",
    updatedAt: "2024-12-10",
    answers: [
        {
            id: 1,
            content: "I'm trying to understand how binary search works. Can someone provide a clear example?",
            createdAt: "2024-12-10",
            updatedAt: "2024-12-10",
            comments: [
                {
                    id: 1,
                    content: "I'm trying to understand how binary search works. Can someone provide a clear example?",
                    createdAt: "2024-12-10",
                    updatedAt: "2024-12-10",
                },
                {
                    id: 2,
                    content: "I'm trying to understand how binary search works. Can someone provide a clear example?",
                    createdAt: "2024-12-10",
                    updatedAt: "2024-12-10",
                }
            ]
        },
        {
            id: 2,
            content: "I'm trying to understand how binary search works. Can someone provide a clear example?",
            createdAt: "2024-12-10",
            updatedAt: "2024-12-10",
            comments: [
                {
                    id: 1,
                    content: "I'm trying to understand how binary search works. Can someone provide a clear example?",
                    createdAt: "2024-12-10",
                    updatedAt: "2024-12-10",
                },
                {
                    id: 2,
                    content: "I'm trying to understand how binary search works. Can someone provide a clear example?",
                    createdAt: "2024-12-10",
                    updatedAt: "2024-12-10",
                }
            ]
        }
    ]
}


// function CommentCard({ comment }: { comment: Comment }) {
//     return (
//         <div className="w-full bg-accent-100 border border-text-200 rounded-xl p-3 flex flex-col justify-center items-start gap-1">
//             <span className="text-sm opacity-50 flex gap-2 items-center mb-1">
//                 <Icon icon="majesticons:user-circle" className="w-6 h-6" />
//                 <p>By <b>Ahmad Sombol</b></p>
//             </span>

//             <h1 className="opacity-90">
//                 {comment.content}
//       ``      </h1>
//         </div>
//     );
// }
