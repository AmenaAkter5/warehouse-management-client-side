import React from 'react';
import './Inventories.css';
import useInventories from '../../../hooks/useInventories';
import InventoryItems from '../InventoryItems/InventoryItems';
import { useNavigate } from 'react-router-dom';



const Inventories = () => {

    // use inventory items hook
    const [items] = useInventories();

    // use navigate hook
    const navigate = useNavigate();

    // inventory section button handler
    const AddItemsButtonHandle = () => {
        navigate('/add');
    }

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
                </div>
                <div className='text-center'>
                    <button onClick={AddItemsButtonHandle} className='mt-5 px-5 update-btn'>Add Items</button>
                </div>
            </div>
        </section>
    );
};

export default Inventories;