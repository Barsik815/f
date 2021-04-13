import React from 'react'
import Card from "react-bootstrap/Card";
import {withRouter} from 'react-router-dom'

import s from "./Footer.module.css";

const CardCustom = ({ url, text, idPlanet, history }) => {
    return <Card className={s.card} style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}
                 onClick={() => history.push(`/object/${idPlanet}`)}>
        <Card.Img variant="top"
                  src={url} />
        <Card.Body>
            <Card.Title>{text}</Card.Title>
        </Card.Body>
    </Card>
};

export default withRouter(CardCustom)