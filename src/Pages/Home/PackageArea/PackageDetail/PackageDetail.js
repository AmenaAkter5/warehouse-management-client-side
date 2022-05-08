import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './PakageDetail.css';
import React from 'react';

const PackageDetail = (props) => {

    const { price, name, statement, features } = props;

    return (
        <div>
            <h2>{price}/-</h2>
            <h3>{name}</h3>
            <p>{statement}</p>
            {
                features.map((feature) => <p><FontAwesomeIcon className='me-2 p-1 icon-style' icon={faCheck}></FontAwesomeIcon>{feature}</p>)
            }
            <div className="text-center mt-4">
                <button className="update-btn mb-2">
                    <a className="button-link-2"
                        href="https://web.programming-hero.com/">
                        Book Now
                    </a>
                </button>
            </div>
        </div>
    );
};

export default PackageDetail;