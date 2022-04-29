import React from 'react';
import './Footer.css';

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();

    return (
        <footer>
            <p className='text-center mt-4'><small>Copyright © {year} fresh fruit.com</small></p>
        </footer>
    );
};

export default Footer;