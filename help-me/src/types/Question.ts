
type Question = {
    id: number;
    title: string;
    description: string;
    categories: string[];
    author: string;
    isVarified: boolean;
    views: number;
    votes: number;
    replies: number;
    date: string;
}

export default Question;