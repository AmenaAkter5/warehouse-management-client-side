import './PackageArea.css';
import React from 'react';
import PackageDetail from '../PackageDetail/PackageDetail';


const PackageArea = () => {

    return (
        <section className="container shadow-sm py-5">
            <div className="title-text pt-3">
                <p>Packages</p>
                <h1>Our Offered Packages</h1>
            </div>
            <div className='package-container my-5'>
                <div className="shadow package card h-100 px-3 mx-3 border-0 pt-5">
                    <PackageDetail
                        key='1'
                        price='300'
                        name='Basic'
                        statement='For the basic management of your products.'
                        features={
                            ['Limited space access',
                                'Secuirty facility',
                                'Event support',
                                'Well managed',
                                'per day bill']
                        }
                    ></PackageDetail>
                </div>
                <div className="h-100 p-4 mb-3 mx-3 pt-5 border-0 shadow-lg highlighted text-white">
                    <PackageDetail
                        key='2'
                        price='800'
                        name='Standard'
                        statement='For arranging and preserve your products as your demand'
                        features={
                            ['Full space access',
                                'Experienced team',
                                'Latest technology support',
                                'Standard management system',
                                'pay as plan']
                        }
                    ></PackageDetail>
                </div>
                <div className="shadow package card h-100 px-3 mx-3 border-0 pt-5">
                    <PackageDetail
                        key='3'
                        price='1200'
                        name='Premium'
                        statement='Storing your products for exporting purpose.'
                        features={
                            ['Latest technology is used',
                                'Maintain international business law',
                                'Event support',
                                'Well managed',
                                'per day bill']
                        }
                    ></PackageDetail>
                </div>
            </div>
        </section>

    );
};

export default PackageArea;