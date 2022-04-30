import React from 'react';
import useInventories from '../../../hooks/useInventories';
import FruitItems from '../../Home/FruitItems/FruitItems';

const Inventories = () => {

    // use inventory items hook
    const [items] = useInventories();

    return (
        <section className='inventory-section'>
            <div className="container mx-auto my-5">
                <div className="title-text">
                    <p>Inventory</p>
                    <h1>The New Arrival</h1>
                </div>
                <div className="items-container">
                    {
                        items.map(item => <FruitItems
                            key={item._id}
                            item={item}
                        ></FruitItems>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Inventories;