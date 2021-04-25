import React from 'react'
import Card from "react-bootstrap/Card";
import {withRouter} from 'react-router-dom'

import s from "./Footer.module.css";

const CardCustom = ({ url, text, idPlanet, history }) => {
    return <Card className={s.card}
                 onClick={() => history.push(`/object/planet/${idPlanet}`)}>
        <Card.Img variant="top"
                  src={url} />
        <Card.Body>
            <Card.Title><h4 className={s.text}>{text}</h4></Card.Title>
        </Card.Body>
    </Card>
};

export default withRouter(CardCustom)