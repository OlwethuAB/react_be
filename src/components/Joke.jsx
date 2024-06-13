// import React from "react";
// import useFetch from "../hooks/useFetch";

// export default function Joke() { 
//     const { data:joke, isLoading, errorMessage } = useFetch('https://official-joke-api.appspot.com/jokes/random')



//     // useEffect(() => {
//     //     fetch('https://official-joke-api.appspot.com/jokes/random')
//     //     .then(response => response.json())
//     //     .then(results => {
//     //         setIsLoading(false); 
//     //         // console.log(results);
//     //         setJoke(results.setup + ' ' + results.punchline);
//     //     })
//     //     .catch( error => {
//     //         setIsLoading(false);
//     //         setErrorMessage('There was an error');
//     //     });
//     // }, []);

//     return (
//         <div className="container"> 
//             <h2>Joke - ing </h2>
//             <br />
//             {isLoading && <div>loading ...</div>} 

//             {joke && <div>{joke.setup + ' ' + joke.punchline}</div>}
//             {errorMessage && <div>{errorMessage}</div>}
//         </div>
//     )
// }