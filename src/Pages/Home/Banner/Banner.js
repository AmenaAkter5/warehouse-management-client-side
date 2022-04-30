import React from 'react';
import './Banner.css';
import banner from '../../../images/banner.png';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppleWhole } from '@fortawesome/free-solid-svg-icons'


const Banner = () => {

    // use navigate hook
    const navigate = useNavigate();

    // banner page button handler
    const aboutButtonHandle = () => {
        navigate('/about');
    }

    return (
        <section className='banner'>
            <div className='banner-container container d-flex justify-content-between align-items-center'>
                <div>
                    <h5 className='banner-heading mb-3'>HELPING YOU TO MAKE BUSINESS EASIER</h5>
                    <h1 className='banner-title mb-4'>Store fruits,
                        <br />
                        Ensure the freshness. <FontAwesomeIcon className='icon' icon={faAppleWhole} /></h1>
                    <button onClick={aboutButtonHandle} className='banner-btn'>Know More Details</button>
                </div>
                <div>
                    <img className='banner-img img-fluid' src={banner} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Banner;