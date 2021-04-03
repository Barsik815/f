import React from 'react'
import Card from "react-bootstrap/Card";
import s from "./Footer.module.css";

const CardCustom = ({ url, text }) => {
    return <Card className={s.card} style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}>
        <Card.Img variant="top"
                  src={url} />
        <Card.Body>
            <Card.Title>{text}</Card.Title>
        </Card.Body>
    </Card>
};

export default CardCustom