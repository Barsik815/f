import React from "react"
import Card from "react-bootstrap/Card"
import {ListGroup, ListGroupItem} from "react-bootstrap"
import { withRouter } from 'react-router-dom'

import {cardInfo} from "./cardData"
import s from './cards.module.css'
import SearchForm from "../SearchForm/SearchForm"

const MoreDeets = ({ history }) => {
    const renderCard = (card, index) => {
        return (<div>
                <Card className={s.it} key={index} onClick={() => history.push('/object/22')}>
                    <Card.Img alt="Card image" src={card.image}/>
                    <ListGroup>
                        <ListGroupItem className='bg-dark'>{card.title}</ListGroupItem>
                        <ListGroupItem className='bg-dark'>{card.text}</ListGroupItem>
                    </ListGroup>
                </Card>
            </div>
        )
    }

    return (<>
        <SearchForm/>
        <div className={s.grid}> {cardInfo.map(renderCard)}</div>
    </>)
}

export default withRouter(MoreDeets)

