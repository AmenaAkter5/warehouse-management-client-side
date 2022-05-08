import React from 'react';
import useInventories from '../../../hooks/useInventories';
import Loading from '../../Shared/Loading/Loading';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';
import PackageArea from '../PackageArea/PackageArea/PackageArea';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {


    // use inventory hook
    const { dataLoaded } = useInventories();


    // loading page
    if (!dataLoaded) {
        return <Loading></Loading>
    }

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