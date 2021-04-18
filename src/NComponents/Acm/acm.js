import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import Card from "react-bootstrap/Card";
import s from "../Primary/cards.module.css";
import {ListGroup, ListGroupItem} from "react-bootstrap";

import { acmData } from '../../data/acmData';
import {HypData} from "../../data/HypData";

export const Acm = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [title, setTitle] = useState('');
    const [img, setImg] = useState('');
    const [text, setText] = useState('');

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const renderCard = (planet, index) => {
        return (<div>
                <Card className={s.it} key={index} onClick={() => {
                    setTitle(planet.title);
                    setImg(planet.img);
                    setText(planet.text);
                    showModal();
                }}>
                    <Card.Img alt="Card image" src={planet.img}/>
                    <ListGroup>
                        <ListGroupItem className='bg-dark'>{planet.title}</ListGroupItem>
                    </ListGroup>
                </Card>
            </div>
        )
    };

    return (
        <div style={{height: '60vh'}}>
            <div className={s.grid}> {acmData.map(renderCard)}</div>

            <Modal title={title} visible={isModalVisible} footer={null} onCancel={handleCancel} bodyStyle={{ backgroundColor: 'rgba(0, 0, 0, .9)' }}>
                <img src={img} alt={'img'}/>
                <p>{text}</p>
            </Modal>
        </div>
    )
}
