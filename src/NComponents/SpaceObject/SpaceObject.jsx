import React, {useEffect, useState} from 'react'
import {useLocation, withRouter} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import {Collapse, List} from 'antd'

import s from "./SpaceObject.module.css"
import {dataPlanet} from '../../data/Pdata'
import {HypData} from '../../data/HypData'
import {DwarfData} from '../../data/DwarfData'

const {Panel} = Collapse;


const SpaceObject = () => {
    let {id, obj} = useParams();
    const [data, setData] = useState([])

    useEffect(() => {
        if (obj === 'planet') {
            dataPlanet.map(d => {
                if (d.id.toString() === id) {
                    setData(d)
                }
            });
        } else if (obj === 'dwarf') {
            DwarfData.map(d => {
                if (d.id.toString() === id) {
                    setData(d)
                }
            });
        } else {
            HypData.map(d => {
                if (d.id.toString() === id) {
                    setData(d)
                }
            });
        }
    }, [id, obj])

    return <div>
        <div className={s.container}>
            <div className={s.image}><img src={data.img} className={s.img} alt={'planet'}/></div>
            <div className={s.shInf}>
                <h2 className={s.planet}>{data.name}</h2>
                <p>{data.distance}</p>
                <p>{data.diameter}</p>
                <p>{data.weight}</p>
                <p>{data.amount}</p>
                <p>{data.year}</p>
            </div>
        </div>
        <div className={s.block}>
            <h4 className={s.name}>{data.FQuest}</h4>
            <p className={s.description}>{data.Fdescription}</p>
            <h4 className={s.name}>{data.SQuest}</h4>
            <p className={s.description}>{data.Sdescription}</p>
            <h4 className={s.name}>{data.THQuest}</h4>
            <p className={s.description}>{data.THdescription}</p>
            <h4 className={s.name}>{data.FourthQuest}</h4>
            <p className={s.description}>{data.Fourthdescription}</p>
            {obj !== 'dwarf' && <div className={s.collapse}>
                <Collapse collapsible={data.satellites === 0 ? "disabled" : "header"} className={s.list}>
                    <Panel header={data.satellites === 0 ? "Немає супутників" : "Супутники"} key="1">
                        <List
                            size="small"
                            bordered
                            dataSource={data?.moons?.split(', ')}
                            renderItem={item => <List.Item>{item}</List.Item>}
                        />
                    </Panel>
                </Collapse>
            </div>}
        </div>
    </div>;
}

export default withRouter(SpaceObject)