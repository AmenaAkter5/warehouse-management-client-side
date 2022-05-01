import React from 'react';
import './Inventories.css';
import useInventories from '../../../hooks/useInventories';
import InventoryItems from '../InventoryItems/InventoryItems';



const Inventories = () => {

    // use inventory items hook
    const [items] = useInventories();

    return (
        <section className='inventories-section'>
            <div className="container mx-auto my-5">
                <div className="title-text">
                    <p>Inventory</p>
                    <h1>All Inventory Items</h1>
                </div>
                <div className='ineventory-container'>
                    {
                        items.map(item => <InventoryItems
                            key={item._id}
                            item={item}
                        ></InventoryItems>)
                    }
                    {/* <br />
                    {
                        items.map(item => <FruitItems
                            key={item._id}
                            item={item}
                        ></FruitItems>)
                    } */}
                </div>
            </div>
        </section>
    );
};

export default Inventories;