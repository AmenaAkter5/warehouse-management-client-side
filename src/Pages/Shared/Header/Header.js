import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.PNG';
import './Header.css';

const Header = () => {

    return (
        <header className='header'>
            <Navbar collapseOnSelect expand="lg" sticky='top'>
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height={60} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className='text-center' id="responsive-navbar-nav">
                        <Nav className="navbar ms-auto">
                            <Link to='/home'>Home</Link>
                            <Link to='/blogs'>Blogs</Link>
                            <Link to='/about'>About</Link>
                            <Link to='/checkout'>Checkout</Link>
                            <Link to='/signin'><button>Sign In</button></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;