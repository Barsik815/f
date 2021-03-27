import React from 'react'
import {Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import planets from '../../Components/Header/planets.png'
import s from './navbar.module.css'

const Navibar = () => {
    return (
        <Navbar collapseOnSelect expand='lg' className={s.bc} variant='dark' >
            <Navbar.Brand><img src={planets} alt="Gg" height='48px'/></Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className='mr-auto' >
                    <Nav.Link><NavLink to='/solar' className={s.menuItem} activeClassName={s.selectedMenuItem}>Solar
                        System</NavLink></Nav.Link>
                    <Nav.Link><NavLink to='/planets' className={s.menuItem}
                                       activeClassName={s.selectedMenuItem}>Planets</NavLink></Nav.Link>
                    <Nav.Link><NavLink to='/moons' className={s.menuItem}
                                       activeClassName={s.selectedMenuItem}>Moons</NavLink></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navibar;