import React, { useState } from 'react';
import { Modal } from 'antd';
import Card from "react-bootstrap/Card";
import s from "../Primary/cards.module.css";
import {ListGroup, ListGroupItem} from "react-bootstrap";

import { acmData } from '../../data/acmData';


export const Acm = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [title, setTitle] = useState('');
    const [img, setImg] = useState('');
    const [text, setText] = useState('');
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');

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
                    setText(planet.description);
                    setText1(planet.Sdescription);
                    setText2(planet.Tdescription);
                    showModal();
                }}>
                    <Card.Img alt="Card image" src={planet.img}/>
                    <ListGroup>
                        <ListGroupItem className='bg-dark'>{planet.title}</ListGroupItem>
                        <ListGroupItem className='bg-dark'>{planet.text}</ListGroupItem>
                    </ListGroup>
                </Card>
            </div>
        )
    };


        return (
        <div style={{height: '60vh'}}>
            <h1 className={s.asteroid}>Метеорити, комети та астероїди</h1>
            <p className={s.firstdescription}>На самому початку створення нашої Сонячної системи, перш ніж була Земля, Юпітер або Плутон, масивна закручена хмара
                пилу та газу «кружляла» довкола молодого Сонця. Частинки пилу на цьому диску стикалися між собою і утворювали
                більші шматочки породи. Цей процес тривав, поки вони не досягли розмірів валунів. Врешті-решт цей процес нарощування
                сформував планети нашої Сонячної системи.</p>

            <div className={s.grid}> {acmData.map(renderCard)}</div>

            <Modal title={title} visible={isModalVisible} footer={null} onCancel={handleCancel} bodyStyle={{ backgroundColor: 'rgba(0, 0, 0, .9)' }} width='75%'>
                <img src={img} alt={'img'} className={s.pica} />
                <div className={s.description}>
                <p>{text}</p>
                <p>{text1}</p>
                <p>{text2}</p>
                </div>
            </Modal>
        </div>
    )
}


