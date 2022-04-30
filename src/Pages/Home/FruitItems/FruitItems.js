import React from 'react';
import './FruitItems.css';


const FruitItems = ({ item }) => {
    const { name, price, description, img } = item

    return (
        <div className="user-reviews px-3">
            <div className="d-flex justify-content-center pt-3 mb-3">
                <img src={img} alt="" />
            </div>
            <h5 className="text-center fw-bold ratings">{price}</h5>
            <h4 className="text-center mb-3">{name}</h4>
            <p>{description}</p>
        </div>
    );
};

export default FruitItems;