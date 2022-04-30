import React from 'react';
import './Banner.css';
import banner from '../../../images/banner.png';
import { Navigate } from 'react-router-dom';

const Banner = () => {

    // banner page button handler
    const aboutButtonHandle = () => {
        Navigate('/about');
    }

    return (
        <section className='banner'>
            <div className='banner-container container d-flex justify-content-between align-items-center'>
                <div>
                    <h5 className='banner-heading mb-3'>HELPING YOU TO MAKE LIFE EASIER</h5>
                    <h1 className='banner-title mb-4'>Feel Better, move better, be better</h1>
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