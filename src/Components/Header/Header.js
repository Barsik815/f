import React from 'react';
import style from './Header.module.css';
import Navbar from './Navbar'

const Header = () => {
    return (
        <header className={style.header}>
            <Navbar/>
        </header>
    )
}
export default Header;