import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faLocationDot, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import footerImg from '../../../images/footer-img.jpeg';
import React from 'react';
import './Footer.css';

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();

    return (
        <footer id='footer'>
            <img src={footerImg} className="footer-img" alt="" />
            <div className="title-text">
                <p>CONTACT</p>
                <h1>Visit Us Today</h1>
            </div>
            <div className="footer-row">
                <div className="footer-left">
                    <h1>Opening Hours</h1>
                    <p><FontAwesomeIcon className='fa-solid' icon={faClock}></FontAwesomeIcon>Monday to Friday - 9 am to 9 pm</p>
                    <p><FontAwesomeIcon className='fa-solid' icon={faClock}></FontAwesomeIcon>Saturday and Sunday - 8 am to 11 pm</p>
                </div>
                <div className="footer-right">
                    <h1>Location</h1>
                    <p>#30 abc colony, xyz city <FontAwesomeIcon className='fa-solid' icon={faLocationDot}></FontAwesomeIcon></p>
                    <p>example@gmail.com<FontAwesomeIcon className='fa-solid' icon={faPaperPlane}></FontAwesomeIcon></p>
                    <p>+01 12586<FontAwesomeIcon className='fa-solid' icon={faPhone}></FontAwesomeIcon></p>
                </div>
            </div>
            <div className="social-links">
                <FaFacebook className='fa-brands' />
                <FaInstagram className='fa-brands'></FaInstagram>
                <FaTwitter className='fa-brands'></FaTwitter>
                <FaYoutube className='fa-brands'></FaYoutube>
                <p className='text-center mt-4'>Copyright © {year} fresh fruit.com</p>
            </div>
        </footer>
    );
};

export default Footer;