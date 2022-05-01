import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FruitItems.css';


const FruitItems = ({ item }) => {

    // destructuring item information
    const { _id, name, price, description, img, quantity, cart, supplier } = item

    // use navigate hook
    const navigate = useNavigate();

    // update stock button handler
    const updateStockHandler = id => {
        navigate(`/inventory/${id}`);
    }

    return (
        <div className="items-description px-3">
            <div className="d-flex justify-content-center pt-3 mb-3">
                <img src={img} alt="" />
            </div>
            <h3 className="text-center fw-bold">{name}</h3>
            <h4 className="text-center mb-3 price">{price}/-</h4>
            <div className='p-2'>
                <h5>Quantity: {quantity} {name === 'Jackfruit' || name === 'Water Mealon' ? 'Pieces' : 'Kg'}</h5>
                <h6>Stocked Cart: {cart}</h6>
                <h6>Supplier:  {supplier}</h6>
                <p className='mt-2 items-text'>{description}</p>
            </div>
            <div className='text-center'>
                <button onClick={() => updateStockHandler(_id)} className='update-btn'>Update Stock</button>
            </div>
        </div>
    );
};

export default FruitItems;