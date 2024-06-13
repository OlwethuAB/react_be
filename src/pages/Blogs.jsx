import React from "react";
import {  Link } from "react-router-dom";

export default function () {
    return (
        <div className="container"> 
            <ul>
                <li>
                    <Link to='/blog/1'>
                        Post 1
                    </Link>
                </li>
                <li>
                    < Link to='/blog/2'>
                        Post 2
                    </ Link>
                </li>
            </ul>
        </div>
    )
}   