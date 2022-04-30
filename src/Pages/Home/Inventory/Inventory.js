import React, { useEffect, useState } from 'react';
import './Inventory.css';
import FruitItems from '../FruitItems/FruitItems';

const Inventory = () => {

    // users data load state
    const [items, setItems] = useState([]);

    // users data fetch
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

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
                            key={items._id}
                            item={item}
                        ></FruitItems>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Inventory;