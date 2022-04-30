import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FruitItems.css';


const FruitItems = ({ item }) => {
    const { _id, name, price, description, img } = item

    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/items/${id}`);
    }

    return (
        <div className="items-description px-3">
            <div className="d-flex justify-content-center pt-3 mb-3">
                <img src={img} alt="" />
            </div>
            <h5 className="text-center fw-bold price">{price}</h5>
            <h4 className="text-center mb-3">{name}</h4>
            <p>{description}</p>
            <button onClick={() => navigateToServiceDetail(_id)} className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default FruitItems;