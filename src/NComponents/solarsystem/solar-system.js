import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import {Tabs} from 'antd';

import MoreDeets from "../card/cards";
import s from './solarsystem.module.css';
import Navibar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";

const {TabPane} = Tabs;

function callback(key) {
    console.log(key);
}

export const SolarSystem = () => {
    return (<div className={s.a}>
            <h1 className={s.t}>Planets in our solar system</h1>
            <Tabs defaultActiveKey="1" onChange={callback} centered className={s.tab}>
                <TabPane tab="Primary" key="1" >
                    <MoreDeets/>
                </TabPane>
                <TabPane tab="Dwarf" key="2">
                    <SearchForm/>
                    <Navibar/>
                </TabPane>
                <TabPane tab="Hypothetical" key="3">
                    <SearchForm/>
                    <Navibar/>
                </TabPane>
            </Tabs>
        </div>
    );
}
