import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ItemDetail = () => {

    // get dynamic parameter of route
    const { id } = useParams();

    // fruit item data load state
    const [item, setItem] = useState({});

    // data load
    useEffect(() => {
        const url = `http://localhost:5000/fruits/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [id]);


    // use navigate hook
    const navigate = useNavigate();

    // manage inventory button handler
    const manageInventoryHandle = () => {
        navigate('/inventory');
    }

    return (
        <div>
            <h1>This is Item Detail Page</h1>
            <h5>Id: {id}</h5>
            <h6>Name: {item.name}</h6>
            <div className='text-center'>
                <button onClick={manageInventoryHandle} style={{ color: '#220768', fontSize: '20px' }} className='btn btn-link fw-bold mt-5 px-5 bg-white'>Manage Inventories</button>
            </div>
        </div>
    );
};

export default ItemDetail;