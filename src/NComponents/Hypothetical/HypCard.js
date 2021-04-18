import React from "react"
import Card from "react-bootstrap/Card"
import {ListGroup, ListGroupItem} from "react-bootstrap"
import {withRouter} from 'react-router-dom'

import s from '../Primary/cards.module.css'
import { HypData } from '../../data/HypData'

const Hypo = ({history}) => {

    const renderCard = (planet, index) => {
        return (<div>
                <Card className={s.it} key={index} onClick={() => history.push(`/object/${planet.id}`)}>
                    <Card.Img alt="Card image" src={planet.img}/>
                    <ListGroup>
                        <ListGroupItem className='bg-dark'>{planet.name}</ListGroupItem>
                        <ListGroupItem className='bg-dark'>{planet.ShDescription}</ListGroupItem>
                    </ListGroup>
                </Card>
            </div>
        )
    };

    return (<>
        <div className={s.grid}> {HypData.map(renderCard)}</div>
    </>)
}

export default withRouter(Hypo)

