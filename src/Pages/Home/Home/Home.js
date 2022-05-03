import React from 'react';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';
import PackageArea from '../PackageArea/PackageArea/PackageArea';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {

    // #005fce;
    // #017bf9;
    // #022a67;
    // #007cfd;
    // #007dfe;

    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
            <PackageArea></PackageArea>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;