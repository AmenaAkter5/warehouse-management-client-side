import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './PackageOne.css';


const PackageOne = () => {
    return (
        <div className="card h-100 px-3 mx-3 border-0 pt-5">
            <h2>300/-</h2>
            <h3>Basic</h3>
            <p>For the basic management of your products.</p>
            <p><FontAwesomeIcon className='me-2 p-1 icon-style' icon={faCheck}></FontAwesomeIcon>Limited space access</p>
            <p><FontAwesomeIcon className='me-2 p-1 icon-style' icon={faCheck}></FontAwesomeIcon>Secuirty facility</p>
            <p><FontAwesomeIcon className='me-2 p-1 icon-style' icon={faCheck}></FontAwesomeIcon>Event support</p>
            <p><FontAwesomeIcon className='me-2 p-1 icon-style' icon={faCheck}></FontAwesomeIcon>Well managed</p>
            <p><FontAwesomeIcon className='me-2 p-1 icon-style' icon={faCheck}></FontAwesomeIcon>per day bill</p>
            <div className="text-center mt-4">
                <button className="update-btn mb-2">
                    <a className="button-link-2 text-white"
                        href="https://web.programming-hero.com/">
                        Book Now
                    </a>
                </button>
            </div>
        </div>
    );
};

export default PackageOne;