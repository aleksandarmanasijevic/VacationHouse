import React from 'react';
import './App.css';
import {NavigationBar} from './Components/General/NavigationBar/NavigationBar';
import {Footer} from './Components/General/Footer/Footer';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {HomePage} from "./Components/HomePage/HomePage";
import {GalleryPage} from "./Components/Gallery/GalleryPage";
import {ContactUs} from "./Components/ContactUs/ContactUs";

// import CircularProgress from '@material-ui/core/CircularProgress';

function App() {
        return (
        <Router>
            <div className="App">
                <NavigationBar/>
                <Switch>
                    <Route exact path ="/" component = {HomePage} />
                    <Route path ="/ContactUs" component = {ContactUs} />
                    <Route path ="/GalleryPage" component = {GalleryPage} />
                </Switch>
                <Footer/>
                {/*<CircularProgress disableShrink />  Testing material ui*/}
            </div>
        </Router>
    );
}

export default App;
