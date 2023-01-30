import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'

function NavBarMenu() {

    let activeStyle = {
        textDecoration: 'underline',
        fontWeight: 'bold'
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Blog de recetas</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className='nav-link' to='/' style={({isActive}) => (isActive ? activeStyle : undefined )}>Home</NavLink>
                        <NavLink className='nav-link' to='/admin' style={({isActive}) => (isActive ? activeStyle : undefined )} >Admin</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarMenu;