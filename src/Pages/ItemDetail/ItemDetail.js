import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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

    return (
        <div>
            <h1>This is Item Detail Page</h1>
            <h5>Id: {id}</h5>
            <h6>Name: {item.name}</h6>
        </div>
    );
};

export default ItemDetail;