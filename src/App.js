import React from 'react';
import Header from './Components/Header/Header.js';
import Main from './Components/Main/Main.js';
import Footer from './Components/Footer/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from "./NComponents/Navbar/Navbar";

import {SolarSystem} from './NComponents/solar-system.js';
import {Planets} from './NComponents/planets.js';
import {Moons} from './NComponents/moons.js';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import MoreDeets from './NComponents/card/cards.js'


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navibar/>
                <Switch>
                    <Route exact path='/solar' component={SolarSystem}/>
                    <Route exact path='/planets' component={Planets}/>
                    <Route exact path='/moons' component={Moons}/>
                </Switch>
                <Main/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
