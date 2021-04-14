import React, {useEffect, useState} from 'react'
import {withRouter} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import {Collapse, List} from 'antd'

import s from "./SpaceObject.module.css"
import {dataPlanet} from '../../data/Pdata'

const {Panel} = Collapse;


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
                <h2 className={s.planet}>{data.name}</h2>
                <p>Відстань від Сонця: {data.distance}</p>
                <p>Екваторіальний діаметр: {data.diameter}</p>
                <p>Маса: {data.weight}</p>
                <p>Супутники: {data.amount}</p>
                <p>Тривалість року: {data.year}</p>
            </div>
        </div>
        <div className={s.block}><p className={s.description}>{data.description}</p>
        <div className={s.collapse}>
            <Collapse collapsible={data.amount === 0 ? "disabled" : "header"} className={s.list}>
                <Panel header="Супутники" key="1">
                    <List
                        size="small"
                        bordered
                        dataSource={data?.moons?.split(', ')}
                        renderItem={item => <List.Item>{item}</List.Item>}
                    />
                </Panel>
            </Collapse>
        </div></div>
    </div>;
}

export default withRouter(SpaceObject)