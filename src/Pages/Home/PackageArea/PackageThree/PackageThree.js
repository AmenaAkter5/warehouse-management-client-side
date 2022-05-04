import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const PackageThree = () => {
    return (
        <div className="card h-100 px-3 mx-3 border-0 pt-5 rounded rounded-3">
            <h3>1200/-</h3>
            <h3>Premium</h3>
            <p>Storing your products for exporting purpose.</p>
            <p><FontAwesomeIcon className='me-2 p-1 icon-style' icon={faCheck}></FontAwesomeIcon>Latest technology is used</p>
            <p><FontAwesomeIcon className='me-2 p-1 icon-style' icon={faCheck}></FontAwesomeIcon>Maintain international business law</p>
            <p><FontAwesomeIcon className='me-2 p-1 icon-style' icon={faCheck}></FontAwesomeIcon>Event support</p>
            <p><FontAwesomeIcon className='me-2 p-1 icon-style' icon={faCheck}></FontAwesomeIcon>Well Managed</p>
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

export default PackageThree;