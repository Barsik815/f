import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import {Tabs} from 'antd';

import PlanetCard from "../Primary/PlanetCard";
import s from './solarsystem.module.css';
import DwarfCard from "../Dwarf/DwarfCards";
import Hypo from "../Hypothetical/HypCard"

const {TabPane} = Tabs;

function callback(key) {
    console.log(key);
}

export const SolarSystem = () => {
    return (<div className={s.d}>
            <h1 className={s.t}>Планети нашої сонячної системи</h1>
            <Tabs defaultActiveKey="1" onChange={callback} centered className={s.tab}>
                <TabPane tab="Головні" key="1" >
                    <PlanetCard/>
                </TabPane>
                <TabPane tab="Карлики" key="2">
                    <DwarfCard/>
                </TabPane>
                <TabPane tab="Гіпотетичні" key="3">
                    <Hypo/>
                </TabPane>
            </Tabs>
        </div>
    );
}
