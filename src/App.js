import React from 'react';
import ControlledCarousel from './NComponents/Footer/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from "./NComponents/Navbar/Navbar";

import {SolarSystem} from './NComponents/solarsystem/solar-system.js';
import {Planets} from './NComponents/planets.js';
import {Moons} from './NComponents/moons.js';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";


function App() {
    return (<div>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <div>
                    <Navibar/>
                    <Switch>
                        <Route exact path='/' render={() => <Redirect to={"/solar"}/>}/>
                        <Route exact path='/solar' component={SolarSystem}/>
                        <Route exact path='/planets' component={Planets}/>
                        <Route exact path='/moons' component={Moons}/>
                    </Switch>

                </div>
            </BrowserRouter>
            <ControlledCarousel/>
        </div>
    );
}

export default App;
