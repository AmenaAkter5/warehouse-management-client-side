import React from 'react';
import './Inventory.css';
import FruitItems from '../FruitItems/FruitItems';
import useInventories from '../../../hooks/useInventories';
import { useNavigate } from 'react-router-dom';


const Inventory = () => {

    // use inventory hook
    const { items } = useInventories();

    // use navigate hook
    const navigate = useNavigate();

    // manage inventory button handler
    const manageInventoryHandle = () => {
        navigate('/inventory');
    }

    return (
        <section className='inventory-section'>
            <div className="container mx-auto my-5">
                <div className="title-text">
                    <p>Inventory</p>
                    <h1>The New Arrival</h1>
                </div>
                <div className="items-container">
                    {
                        items.slice(0, 6).map(item => <FruitItems
                            key={item._id}
                            id={item._id}
                            item={item.data}
                        ></FruitItems>)
                    }
                </div>
                <div className='text-center'>
                    <button onClick={manageInventoryHandle} style={{ color: '#220768', fontSize: '20px' }} className='btn btn-link fw-bold mt-5 px-5 bg-white'>Manage Inventories</button>
                </div>
            </div>
        </section >
    );
};

export default Inventory;