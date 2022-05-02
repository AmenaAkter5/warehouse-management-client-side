import React, { useEffect, useState } from 'react';
import './ItemDetail.css';
import { useNavigate, useParams } from 'react-router-dom';



const ItemDetail = () => {

    // get dynamic parameter of route
    const { id } = useParams();

    // fruit item data state
    const [item, setItem] = useState({});

    // data load
    useEffect(() => {
        const url = `http://localhost:5000/fruits/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [id, item]);


    // use navigate hook
    const navigate = useNavigate();

    // manage inventory button handler
    const manageInventoryHandle = () => {
        navigate('/inventory');
    }


    // delivered button handle
    const deliverdButtonHandle = () => {

        const quantity = item.quantity - 1;
        const updatedItem = { quantity };

        // update data to server
        const url = `http://localhost:5000/fruits/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedItem),
        })
            .then(response => response.json())
            .then(data => {
                // console.log('Success:', data);
            })
    };

    return (
        <section className='item-detail-section'>
            <div className="title-text">
                <p>Details</p>
                <h2>Detail about {item.name}</h2>
            </div>
            <div className='item-detail-container'>
                <div className='item-detail'>
                    <div className="d-flex justify-content-center mb-3">
                        <img src={item.img} alt="" />
                    </div>
                    <h4 className="text-center fw-bold">{item.name}</h4>
                    <h4 className="text-center mb-2 price">{item.price}/-</h4>
                    <div className='p-1'>
                        <p className="mb-0">Product id: {item._id}</p>
                        <h5>Quantity: <span id="quantity">{item.quantity}</span> {item.name === 'Jackfruit' || item.name === 'Water Mealon' ? 'Pieces' : 'Kg'}</h5>
                        <h6>Stocked Cart: {item.cart}</h6>
                        <h6>Supplier:  {item.supplier}</h6>
                        <p className='mt-2 items-text'>{item.description}</p>
                        <div className='text-center'>
                            <button onClick={deliverdButtonHandle} className='mt-1 px-5 update-btn'>Delivered</button>
                        </div>
                    </div>
                </div>
                <div>
                    <input type="number" name="" id="" />
                </div>
            </div>
            <div className='text-center'>
                <button onClick={manageInventoryHandle} style={{ color: '#220768', fontSize: '20px' }} className='btn btn-link fw-bold mt-5 px-5 bg-white'>Manage Inventories</button>
            </div>
        </section>
    );
};

export default ItemDetail;