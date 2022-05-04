import React from 'react';
import './Inventories.css';
import useInventories from '../../../hooks/useInventories';
import InventoryItems from '../InventoryItems/InventoryItems';
import { useNavigate } from 'react-router-dom';



const Inventories = () => {

    // use inventory items hook
    const [items, setItems] = useInventories();

    // use navigate hook
    const navigate = useNavigate();

    // add items button handler
    const AddItemsButtonHandle = () => {
        navigate('/add');
    }

    // Delete button handler of manage inventory page

    const handleDelete = id => {

        const proceed = window.confirm('Are you sure to delete?');

        if (proceed) {
            const url = `https://pure-cliffs-64798.herokuapp.com/fruits/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = items.filter(service => service._id !== id);
                    setItems(remaining);
                })
        }
    };

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
                            handleDelete={handleDelete}
                        ></InventoryItems>)
                    }
                </div>
                <div className='text-center'>
                    <button onClick={AddItemsButtonHandle} className='mt-5 px-5 update-btn'>Add More Items</button>
                </div>
            </div>
        </section>
    );
};

export default Inventories;