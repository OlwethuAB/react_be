import { useEffect, useState } from "react";

function useFetch(url) {
    const [data, setData] = useState();
    const [daat, setDaat] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);   
 

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(results => {
            setIsLoading(false); 
            // console.log(results);
            setData(results);
            // const dataChildren = results.flatMap(item => item.data.children);
            // setData(dataChildren)
            // console.log(dataChildren);

        })
        .catch(error => {
            setIsLoading(false);
            setErrorMessage('There was an error');
        });
    }, [url]);

    return {data, daat, isLoading, errorMessage}
}

export default useFetch