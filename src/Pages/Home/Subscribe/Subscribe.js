import React from 'react';
import './Subscribe.css';


const Subscribe = () => {
    return (
        <section className='subscribe d-flex align-items-center'>
            <div className='container d-flex align-items-center justify-content-between'>
                <div className='text-white'>
                    <h1>Get In Touch</h1>
                    <p>The gradual accumulation of information get from us.</p>
                </div>
                <div className='p-5'>
                    <form>
                        <input className='p-1' type="email" name="" placeholder='Your Email' id="" />
                        <input className='p-1 subscribe-btn' type="submit" value="Subscribe" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;