import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";

import Navibar from "./NComponents/Navbar/Navbar";
import {SolarSystem} from './NComponents/solarsystem/solar-system.js';
import {Things} from './NComponents/Things/Things.js';
import {Acm} from './NComponents/Acm/acm.js';
import ControlledCarousel from './NComponents/Footer/Footer.js';
import SpaceObject from "./NComponents/SpaceObject/SpaceObject";
import s from "./NComponents/solarsystem/solarsystem.module.css";


function App() {
    return (<div  className={s.a}>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <div>
                    <Navibar/>
                    <Switch>
                        <Route exact path='/' render={() => <Redirect to={"/main"}/>}/>
                        <Route exact path='/main' component={SolarSystem}/>
                        <Route exact path='/10things' component={Things}/>
                        <Route exact path='/acm' component={Acm}/>
                        <Route path='/object/:id' component={SpaceObject}/>
                    </Switch>
                </div>
                <ControlledCarousel/>
            </BrowserRouter>
        </div>
    );
}

export default App;
