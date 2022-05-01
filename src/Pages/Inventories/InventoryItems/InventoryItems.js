import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './InventoryItems.css';


const InventoryItems = ({ item }) => {

    const { name, price, img, quantity, cart, supplier } = item;

    return (
        <div className='inventory-items'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="inventory-items-details-container">
                <div className="inventory-items-details">
                    <h5 className='mb-1'>{name}</h5>
                    <h6 className='mb-1'>Price: <span style={{ color: '#220768' }}>{price}/-</span></h6>
                    <p>Cart: {cart}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Supplier: {supplier}</p>
                </div>
                <div className="delete-container">
                    <button className='delete-button'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InventoryItems;