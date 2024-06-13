import React, {useEffect, useState} from "react";
import useFetch from "../hooks/useFetch";
// const { data:posts, isLoading, errorMessage } = useFetch('https://www.reddit.com/r/Marvel/comments/pkdevy/if_anyone_can_be_spiderman_why_not_black_panther.json')

export default function Reddit() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(false); // Set initial errorMessage to false

    useEffect(() => {
        fetch('https://www.reddit.com/r/Marvel/comments/pkdevy/if_anyone_can_be_spiderman_why_not_black_panther.json')
        .then(response => response.json())
        .then(results => {
            setIsLoading(false);
            const dataChildren = results.flatMap(item => item.data.children);
            setPosts(dataChildren);
        })
        .catch( error => {
            setIsLoading(false);
            setErrorMessage('There was an error fetching data from Reddit.');
        });
    }, []);

    return (
        <div className="container"> 
            <h2>Reddit - ing </h2>
            <br />
            {isLoading && <div>loading ...</div>}

            {posts.length > 0 && ( // Check if posts array is not empty
                <ul>
                    {posts.map(post => (
                        <li key={post.data.id} className="reddit">
                            <a href={`https://www.reddit.com${post.data.permalink}`}>
                                {post.data.title}
                            </a>
                        </li>
                    ))}
                    {posts.map(post => (
                        <li key={post.data.id} className="reddits">
                            <a href={`https://www.reddit.com${post.data.permalink}`}>
                                {post.data.body}
                            </a>
                        </li>
                    ))}
                </ul>
            )}

            {errorMessage && <div>{errorMessage}</div>}
        </div>
    )
}
