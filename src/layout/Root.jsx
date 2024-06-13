import React from "react";
import { BrowserRouter as Router, Switch, Routes, Route } from "react-router-dom";
import App from "../components/App";
import Navigator from "./NavigationBar";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Blogs from "../pages/Blogs";
import Post from "../pages/Blogs/PostOne";
import Randos from "../pages/RandomSwitches";
import NoMatch from "../pages/404NotFound";

export default function Root() {
    const routes = [
        { path:'/', name:'Home', Component: App},
        { path:'/About', name:'About', Component: About},
        { path:'/Contact', name:'Contact', Component: Contact},
        { path:'/Blogs', name:'Blogs', Component: Blogs},
        { path:'/Blog/:id', name:'Post', Component: Post},
        { path:'/Randos', name:'Randos', Component: Randos},
        { path:'*', name:'NoMatch', Component: NoMatch},
    ];

    return (
        <Router>
            <div className="todo-app-container"> 
                <Navigator />
                <div className="content"> 
                    <Routes>
                        {routes.map(({ path, Component }) => (
                           <Route key={path} path={path} element={<Component />} />
                        ))}
                    </Routes>
                </div>
            </div>
        </Router>
    )
}