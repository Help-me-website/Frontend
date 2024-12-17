import { useSearchParams } from "react-router-dom";


export function useAppendParams() {
    const [searchParams, setSearchParams] = useSearchParams();

    const appendParams = (...args: { key: string, value: string }[]) => {
        // Convert the current searchParams to an object
        const searchParamsObject = Object.fromEntries(searchParams.entries());

        // Append all passed parameters
        args.forEach(arg => {
            searchParamsObject[arg.key] = arg.value;
        });

        // Update the search parameters
        setSearchParams(searchParamsObject);
    };

    return appendParams;
}

