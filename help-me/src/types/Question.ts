
type Question = {
    id: number;
    title: string;
    description: string;
    category: {
        categoryId:number,
        name:string,
        description:string,
        date:string
    };
    firstName: string,
    lastName: string,
    views: number;
    numberOfUsers: number;
    // replies: number;
    date: string;
}

export default Question;