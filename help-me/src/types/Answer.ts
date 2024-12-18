import comments from "./Comment";

type Answers = {
    id: number;
    content: string;
    createdAt: string;
    updatedAt: string;
    comments: comments[];
}

export default Answers;