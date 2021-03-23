import React from 'react'
import style from './Header.module.css'

const header = () => {
    return (
            <header className={style.header}>
                <img src="planets.png"/>
            </header>
    )
}
export default header;