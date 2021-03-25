import React from 'react';
import Header from './Components/Header/Header.js';
import Main from './Components/Main/Main.js';
import Footer from './Components/Footer/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from "./Components/Header/Navbar";

import {SolarSystem} from './NComponents/solar-system.js';
import {Planets} from './NComponents/planets.js';
import {Moons} from './NComponents/moons.js';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


function App() {
    return (
        <div className="App">
            <Router>
                <Navibar/>
                <Switch>
                    <Route exact path='/' component={SolarSystem}/>
                    <Route path='/planets' component={Planets}/>
                    <Route path='/moons' component={Moons}/>
                </Switch>
            </Router>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
