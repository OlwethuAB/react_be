import React from "react";
import { NavLink } from 'react-router-dom';


export default function () {
    return ( 
        <nav>
            <ul>
                <li>
                    <NavLink to='' activeClassName='active'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='about' activeClassName='active'>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to='contact' activeClassName='active'>
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink to='blogs' activeClassName='active'>
                        Blogs
                    </NavLink>
                </li>
                <li>
                    <NavLink to='randos' activeClassName='active'>
                        Random
                    </NavLink>
                </li>
                <li>
                    <NavLink to='blog/:id' activeClassName='active'>
                        Blog
                    </NavLink>
                </li>
                <li>
                    <NavLink to='*' activeClassName='active'>
                    </NavLink>
                </li>
                {/* <li><a href="/">Home</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/Contact">Contact</a></li>
                <li><a href="/Blogs">Blogs</a></li>
                <li><a href="/Blog/:id">Blog</a></li>
                <li><a href="*"></a></li> */}
            </ul>
        </nav>
    )
} 