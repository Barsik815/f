import React from 'react'
import s from './things.module.css'

const B = s.block + ' ' + s.borderB + ' ' + s.i;
const R = s.block + ' ' + s.borderR + ' ' + s.i;
const BR = s.block + ' ' + s.borderRB + ' ' + s.i;

const ThingsCard = ({number, headText, text}) => {
    return <div className={
        number === '3' ? B : number === '6' ? B : number === '9' ? B : number === '10' ? R : BR}>
        <div className={s.tenth}><p className={s.number}>{number}</p>
        <p className={s.headText}>{headText}</p>
        <p className={s.text}>{text}</p></div>
    </div>
};

export default ThingsCard;