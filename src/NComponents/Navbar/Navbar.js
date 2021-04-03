import React from 'react'
import {Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import planets from '../../planets.png'
import s from './navbar.module.css'

const Navibar = () => {
    return (
        <Navbar collapseOnSelect expand='lg' className={s.bc} variant='dark' >
            <Navbar.Brand><img src={planets} alt="Gg" height='48px'/></Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className='mr-auto' >
                    <Nav.Link><NavLink to='/main' className={s.menuItem} activeClassName={s.selectedMenuItem}>Solar
                        System</NavLink></Nav.Link>
                    <Nav.Link><NavLink to='/10things' className={s.menuItem}
                                       activeClassName={s.selectedMenuItem}>10things</NavLink></Nav.Link>
                    <Nav.Link><NavLink to='/acm' className={s.menuItem}
                                       activeClassName={s.selectedMenuItem}>acm</NavLink></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navibar;