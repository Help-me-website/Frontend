import answers from "./answer";

type QuestionFull = {

    id: number;
    title: string;
    content: string;
    category: string;
    createdAt: string;
    updatedAt: string;
    views: number;
    votes: number;
    firstName: string;
    lastName: string;
    answers: answers[];
}








 export default QuestionFull;