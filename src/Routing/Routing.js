import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function Routing() {
    return (
        <div>
            <h1>Hello this is Routing</h1>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/users">Users</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/users">
                    <Users />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
            </Router>
        </div>
    )
}

function Home() {
    return <h1>Hello Home</h1>
}

function About() {
    return <h1>Hello About</h1>
}

function Users() {
    return <h1>Hello Users</h1>
}