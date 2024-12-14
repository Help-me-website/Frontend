import { useParams } from "react-router-dom";


export default function Answer() {

    const { id } = useParams();

    return(id);

}