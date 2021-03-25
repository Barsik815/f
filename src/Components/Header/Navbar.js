import React from 'react'
import {Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navibar = () => {
    return (
        <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
            <Navbar.Brand><img src="planets.png" alt="Gg"/></Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className='mr-auto'>
                    <Nav.Link><Link to='/'>Solar System</Link></Nav.Link>
                    <Nav.Link><Link to='/planets'>Planets</Link></Nav.Link>
                    <Nav.Link><Link to='/moons'>Moons</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navibar;