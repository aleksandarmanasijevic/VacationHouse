import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {HomePage} from '../HomePage';
import {GalleryPage} from '../Gallery/GalleryPage';

export const NavigationBar: React.FC<any> = (props: any) => {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                </ul>

                <hr />
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route path="/about">
                        {/*<About />*/}
                    </Route>
                    <Route path="/gallery">
                        <GalleryPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}