import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './PackageTwo.css';


const PackageTwo = () => {
    return (
        <div className="h-100 p-4 mb-3 mx-3 pt-5 border-0 shadow-lg highlighted position-relative">
            <h2 className="text-white">800/-</h2>
            <h3 className="text-white">Standard</h3>
            <p className="text-white">For arranging and preserve your products as your demand.</p>
            <p className="text-white"><FontAwesomeIcon className='me-2 p-1 highlighted-icon-style' icon={faCheck}></FontAwesomeIcon>Full
                space
                access</p>
            <p className="text-white"><FontAwesomeIcon className='me-2 p-1 highlighted-icon-style' icon={faCheck}></FontAwesomeIcon>Experienced
                team
            </p>
            <p className="text-white"><FontAwesomeIcon className='me-2 p-1 highlighted-icon-style' icon={faCheck}></FontAwesomeIcon>Latest technology support
            </p>
            <p className="text-white"><FontAwesomeIcon className='me-2 p-1 highlighted-icon-style' icon={faCheck}></FontAwesomeIcon>premium
                decoration</p>
            <p className="text-white"><FontAwesomeIcon className='me-2 p-1 highlighted-icon-style' icon={faCheck}></FontAwesomeIcon>pay as
                plan
            </p>
            <div className="text-center mt-4">
                <button className="mb-2 px-3">
                    <a style={{ color: '#220768' }} className="button-link-1 text-decoration-none fw-bold" href="https://web.programming-hero.com/">
                        Book Now
                    </a>
                </button>
            </div>
        </div>
    );
};

export default PackageTwo;