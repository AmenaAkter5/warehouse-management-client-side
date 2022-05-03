import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const MyItemsDetail = ({ items, handleDeleteItems, id }) => {

    // destructuring item
    const { name, price, img, quantity, supplier } = items;


    return (
        <div className='inventory-items'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="inventory-items-details-container">
                <div className="inventory-items-details">
                    <h5 className='mb-1'>{name}</h5>
                    <h6 className='mb-1'>Price: <span style={{ color: '#220768' }}>{price}/-</span></h6>
                    <p>Quantity: {quantity} {name === 'Jackfruit' || name === 'Water Mealon' ? 'Pieces' : 'Kg'}</p>
                    <p>Supplier: {supplier}</p>
                </div>
                <div className="add-delete-container">
                    <button onClick={() => handleDeleteItems(id)} className='delete-button' >
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyItemsDetail;