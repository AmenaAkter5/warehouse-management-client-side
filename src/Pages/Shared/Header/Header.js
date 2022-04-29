import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.PNG';
import './Header.css';

const Header = () => {

    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

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
                            {
                                user ?
                                    <button className='sign-out' onClick={handleSignOut}>Sign Out</button>
                                    :
                                    <>
                                        <Link to='/signin'><button>Sign In</button></Link>
                                        <Link to='/register'><button>Register</button></Link>
                                    </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;