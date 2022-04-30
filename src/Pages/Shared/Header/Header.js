import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.PNG';
import './Header.css';



const Header = () => {

    // get user
    const [user] = useAuthState(auth);

    // handle sign out button
    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <header className='header'>
            <Navbar collapseOnSelect expand="lg" sticky='top'>
                <Container>
                    <Navbar.Brand className='brand-logo' as={Link} to="/">
                        <img height={60} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className='text-center' id="responsive-navbar-nav">
                        <Nav className="navbar ms-auto">
                            <Link to='/home'>Home</Link>
                            <Link to='/blogs'>Blogs</Link>
                            <Link to='/about'>About</Link>
                            {
                                user && <>
                                    <Link to='/manage'>Manage Items</Link>
                                    <Link to='/add'>Add Item</Link>
                                    <Link to='/items'>My Items</Link>
                                </>
                            }
                            {
                                user ?
                                    <button className='sign-out' onClick={handleSignOut}>Sign Out</button>
                                    :
                                    <>
                                        <Link to='/signin'><button className='signin-btn'>Sign In</button></Link>
                                        <Link to='/register'><button className='register-btn'>Register</button></Link>
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