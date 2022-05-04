import './PackageArea.css';
import React from 'react';
import PackageOne from '../PackageOne/PackageOne';
import PackageTwo from '../PackageTwo/PackageTwo';
import PackageThree from '../PackageThree/PackageThree';


const PackageArea = () => {

    return (
        <section className="container shadow-sm py-5">
            <div className="title-text pt-3">
                <p>Packages</p>
                <h1>Our Offered Packages</h1>
            </div>
            <div className='package-container my-5'>
                <div className="shadow package">
                    <PackageOne></PackageOne>
                </div>
                <div>
                    <PackageTwo></PackageTwo>
                </div>
                <div className="shadow package">
                    <PackageThree></PackageThree>
                </div>
            </div>
        </section>

    );
};

export default PackageArea;