import React, { useState } from "react";
import useToggle from '../hooks/useToggle';
import Joke from "../components/Joke";
import Reddit from "../components/Reddit";


export default function RandomSwitches() {
    const [jokeVisible, setJokeVisible] = useState(false);
    const [redditVisible, setRedditVisible] = useToggle(false);
    // const [isJoke, setJoke] = useToggle();
    // const [isReddit, setReddit] = useToggle();

    return (
        <div className="container">
            <div className="buttons">
                <button onClick={() => setJokeVisible(prevJokeVisible => !jokeVisible)} className='button'  >Joke Toggle Feature</button>
                <button onClick={() => setRedditVisible(prevRedditVisible => !redditVisible)} className='button'>Reddit Toggle Feature</button>
                {/* <button onClick={setJoke} className='button'>Joke Toggle Feature</button>
                <button onClick={setReddit} className='button'>Reddit Toggle Feature</button> */}
            </div>
            <div>
                {jokeVisible && <Joke />}
                {redditVisible && <Reddit />}
            </div>
            {/* <div>
                {isJoke && <Joke />}
                {isReddit && <Reddit />}
            </div> */}
        </div>
    )
}


