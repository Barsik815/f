import React, {useEffect, useState} from 'react'
import {withRouter} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import { Collapse, List } from 'antd'

import s from "./SpaceObject.module.css"
import { dataPlanet } from '../../data/Pdata'

const { Panel } = Collapse;

const datass = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

const SpaceObject = () => {
    let {id} = useParams();
    const [data, setData] = useState([])

    useEffect(() => {
        dataPlanet.map(d => {
            if (d.id.toString() === id) {
                setData(d)
            }
        });
    }, [id])
    
    return <div>
        <div className={s.container}>
            <div className={s.image}><img src={data.img} className={s.img} alt={'planet'}/></div>
            <div className={s.shInf}>
                <p>{data.name}</p>
                <p>Відстань від Сонця: {data.distance}</p>
                <p>Екваторіальний діаметр: {data.diameter}</p>
                <p>Маса: {data.weight}</p>
                <p>Супутники: {data.amount}</p>
                <p>Тривалість року: {data.year}</p>
                <p>Тривалість доби: {data.day}</p>
            </div>
            <div>{data.description}</div>
        </div>
        <div>
            <Collapse collapsible={data.amount === 0 ? "disabled" : "header"}>
                <Panel header="Moons" key="1">
                    <List
                        size="small"
                        bordered
                        dataSource={data?.moons?.split(', ')}
                        renderItem={item => <List.Item>{item}</List.Item>}
                    />
                </Panel>
            </Collapse>
        </div>
    </div>;
}

export default withRouter(SpaceObject)