
import 'react-quill/dist/quill.snow.css';
import { Icon } from "@iconify/react/dist/iconify.js";
import QuestionFull from '../types/QuestionFull';
import Button from '../components/Button';
import Answers from '../types/answer';






const question: QuestionFull = {
    id: 1,
    title: "How to implement a binary search algorithm?",
    category: "Algorithms",
    firstName: "3rs",
    lastName: "abo sakha",
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


//bg-accent-50


export default function Answer() {


    
  return<main className="m-auto w-[90vw] max-w-[900px] border border-text-200 rounded-xl p-3
                flex flex-col justify-center items-start gap-1 mt-3
            "
        >
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
                        <Icon icon="majesticons:comment-line" className="w-6 h-6 " />
                        {question.answers.length}
                    </span>

                    {/* {question.isVarified &&
                        <span className="text-base font-medium text-oh-yeah flex gap-1 items-center justify-center">
                            <Icon icon="majesticons:badge-check" className="w-6 h-6 " />
                            Solved
                        </span>
                    } */}
                </div>
            </section>
            
            <hr className="text-text-500 my-3 w-full" />
            <h3 className="text-xl font-bold">Answers</h3>

            <section className="flex flex-col gap-3 items-start">
                {question.answers.map((answer, index) => <AnswerCard key={index} answer={answer} />)}
            </section>

  </main>;

}


function AnswerCard({answer}: {answer: Answers}) {

    return(
        <div className="w-full bg-accent-50 border border-text-200 rounded-xl p-3
                        flex flex-col justify-center items-start gap-1
            "
        >

            <span className="text-sm opacity-50 flex gap-2 items-center mb-1">
                <Icon icon="majesticons:user-circle" className="w-6 h-6" />
                <p>By <b>Ahha asdl</b></p>
            </span>

            <h1 className="">
                {answer.content}
            </h1>



            {/* <div className="flex flex-row gap-4 mt-2 flex-wrap text-text-400 text-unselectable">
                <span className="text-base font-medium text-bg-shade-3 flex gap-1 items-center justify-center">
                    <Icon icon="majesticons:plus-circle-line" className="w-6 h-6" />
                    {answer.votes}
                </span>

                <span className="text-base font-medium text-bg-shade-3 flex gap-1 items-center justify-center">
                    <Icon icon="majesticons:eye-line" className="w-6 h-6" />
                    {answer.views}
                </span> 
            </div> */}

            <span className="mt-3 py-2 w-fit flex gap-2 text-text-500 text-unselectable text-hover cursor-pointer">
                <Icon icon="majesticons:comment-line" className="w-6 h-6" />
                Comment
            </span>

            <section className="flex flex-col gap-3 items-start">
                {answer.comments.map((comment, index) => <CommentCard key={index} comment={comment} />)}
            </section>

        </div>
    );
}

function CommentCard({comment}: {comment: Comment}) {

    return(
        <div className="w-full bg-accent-100 border border-text-200 rounded-xl p-3
                        flex flex-col justify-center items-start gap-1
            "
        >

            <span className="text-sm opacity-50 flex gap-2 items-center mb-1">
                <Icon icon="majesticons:user-circle" className="w-6 h-6" />
                <p>By <b>Ahha asdl</b></p>
            </span>

            <h1 className="opacity-90">
                {comment.content}
            </h1>



            {/* <div className="flex flex-row gap-4 mt-2 flex-wrap text-text-400 text-unselectable">
                <span className="text-base font-medium text-bg-shade-3 flex gap-1 items-center justify-center">
                    <Icon icon="majesticons:plus-circle-line" className="w-6 h-6" />
                    {answer.votes}
                </span>

                <span className="text-base font-medium text-bg-shade-3 flex gap-1 items-center justify-center">
                    <Icon icon="majesticons:eye-line" className="w-6 h-6" />
                    {answer.views}
                </span> 
            </div> */}

    

        </div>
    );
}

