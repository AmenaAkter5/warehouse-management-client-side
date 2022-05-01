import React from 'react';
import notfound from '../../../images/notfound.png';
import './NotFound.css';


const NotFound = () => {
    return (
        <section className='notfound'>
            <div className='notfound-container container d-flex justify-content-between align-items-center'>
                <div>
                    <h1 className='notfound-title mb-4'>Oops! You may<br /> <span className='text-danger'>lost</span> your route!</h1>
                </div>
                <div>
                    <img className='notfound-img img-fluid' src={notfound} alt="" />
                </div>
            </div>
        </section>
    );
};

export default NotFound;