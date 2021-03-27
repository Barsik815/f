import React from "react";
import Card from "react-bootstrap/Card";
import s from'./cards.module.css'
import {ListGroup, ListGroupItem} from "react-bootstrap";
import {cardInfo} from "./cardData";

const MoreDeets = () => {
    const renderCard = (card, index) => {
        return (<div>
                <Card className={s.it} key={index}>
                    <Card.Img alt="Card image" src={card.image}/>
                    <ListGroup>
                        <ListGroupItem className='bg-dark'>{card.title}</ListGroupItem>
                        <ListGroupItem className='bg-dark'>{card.text}</ListGroupItem>
                    </ListGroup>
            </Card>
        </div>
        )
    }
    return (<div className='grid'> {cardInfo.map(renderCard)}</div>)
}

export default MoreDeets

