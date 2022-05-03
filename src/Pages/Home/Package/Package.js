import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Package.css';


const Package = () => {
    return (
        // <!---------- Package-Area --------->
        // <!-- ---------------------------- -->

        <section className="container shadow-sm pb-5">
            <h1 className="text-center mb-4 fw-bold">Our Package</h1>

            {/* <!-- package-1 --> */}


            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 my-5">
                <div className="col shadow">
                    <div className="card h-100 px-3 mx-2 border-0 pt-5">
                        <h3>$300</h3>
                        <h3>Business Fair</h3>
                        <p>For most businesses event
                            like book fair, craft fair.</p>
                        <p><FontAwesomeIcon className='me-2 p-1 icon-style' icon={faCheck}></FontAwesomeIcon>Limited space access</p>
                        <p><FontAwesomeIcon className='me-2 p-1 icon-style' icon={faCheck}></FontAwesomeIcon>Secuirty facility</p>
                        <p><FontAwesomeIcon className='me-2 p-1 icon-style' icon={faCheck}></FontAwesomeIcon>Event support</p>
                        <p><FontAwesomeIcon className='me-2 p-1 icon-style' icon={faCheck}></FontAwesomeIcon>Decoration design</p>
                        <p><FontAwesomeIcon className='me-2 p-1 icon-style' icon={faCheck}></FontAwesomeIcon>per day bill</p>
                        <div className="text-center mt-4">
                            <button className="mb-2 common-button-2 rounded-pill">
                                <a className="button-link-2 text-white"
                                    href="https://web.programming-hero.com/">
                                    Book Now
                                </a>
                            </button>
                        </div>
                    </div>
                </div>

                {/* <!-- package-2 --> */}


                <div className="col shadow">
                    <div className="card h-100 px-3 mx-2 border-0 pt-5">
                        <h3>$500</h3>
                        <h3>Wedding basic</h3>
                        <p>For weddings with basic plan
                            and limited item.</p>
                        <p><FontAwesomeIcon className='me-2 p-1 icon-style' icon={faCheck}></FontAwesomeIcon>Full space access</p>
                        <p><FontAwesomeIcon className='me-2 p-1 icon-style' icon={faCheck}></FontAwesomeIcon>Food arrangement</p>
                        <p><FontAwesomeIcon className='me-2 p-1 icon-style' icon={faCheck}></FontAwesomeIcon>special support</p>
                        <p><FontAwesomeIcon className='me-2 p-1 icon-style' icon={faCheck}></FontAwesomeIcon>decoration design</p>
                        <p><FontAwesomeIcon className='me-2 p-1 icon-style' icon={faCheck}></FontAwesomeIcon>Billed as shift</p>
                        <div className="text-center mt-4">
                            <button className="mb-2 common-button-2 rounded-pill">
                                <a className="button-link-2 text-white"
                                    href="https://web.programming-hero.com/">
                                    Book Now
                                </a>
                            </button>
                        </div>
                    </div>
                </div>

                {/* <!----------- Package-3 ---------->
                <!------- Highlighted-Area -------> */}


                <div className="col">
                    <div className="h-100 p-4 mb-3 me-3 pt-5 border-0 shadow-lg highlighted position-relative">
                        <div className="position-absolute top-0 start-100 translate-middle">
                            <h4 className="text-white px-2 rounded-pill hot">Hot</h4>
                        </div>
                        <h3 className="text-white">$800</h3>
                        <h3 className="text-white">Wedding plus</h3>
                        <p className="text-white">For arranging a wedding like your dream.</p>
                        <p className="text-white"><FontAwesomeIcon className='me-2 p-1 highlighted-icon-style' icon={faCheck}></FontAwesomeIcon>full
                            space
                            access</p>
                        <p className="text-white"><FontAwesomeIcon className='me-2 p-1 highlighted-icon-style' icon={faCheck}></FontAwesomeIcon>dedicated
                            team
                        </p>
                        <p className="text-white"><FontAwesomeIcon className='me-2 p-1 highlighted-icon-style' icon={faCheck}></FontAwesomeIcon>buffet
                            food
                        </p>
                        <p className="text-white"><FontAwesomeIcon className='me-2 p-1 highlighted-icon-style' icon={faCheck}></FontAwesomeIcon>premium
                            decoration</p>
                        <p className="text-white"><FontAwesomeIcon className='me-2 p-1 highlighted-icon-style' icon={faCheck}></FontAwesomeIcon>pay as
                            plan
                        </p>
                        <div className="text-center mt-4">
                            <button className="mb-2 common-button rounded-pill">
                                <a className="button-link-1" href="https://web.programming-hero.com/">
                                    Book Now
                                </a>
                            </button>
                        </div>
                    </div>
                </div>


                {/* <!-- package-4 --> */}


                <div className="col shadow">
                    <div className="card h-100 px-3 mx-2 border-0 pt-5">
                        <h3>$1200</h3>
                        <h3>Corporate Event</h3>
                        <p>For arranging a businesses event like book fair.</p>
                        <p><FontAwesomeIcon className='me-2 p-1 icon-style' icon={faCheck}></FontAwesomeIcon>limited space access</p>
                        <p><FontAwesomeIcon className='me-2 p-1 icon-style' icon={faCheck}></FontAwesomeIcon>secuirty facility</p>
                        <p><FontAwesomeIcon className='me-2 p-1 icon-style' icon={faCheck}></FontAwesomeIcon>event support</p>
                        <p><FontAwesomeIcon className='me-2 p-1 icon-style' icon={faCheck}></FontAwesomeIcon>decoration design</p>
                        <p><FontAwesomeIcon className='me-2 p-1 icon-style' icon={faCheck}></FontAwesomeIcon>per day bill</p>
                        <div className="text-center mt-4">
                            <button className="mb-2 common-button-2 rounded-pill">
                                <a className="button-link-2 text-white"
                                    href="https://web.programming-hero.com/">
                                    Book Now
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Package;