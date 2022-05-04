import React from 'react';
import './AddItem.css';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';



const AddItem = () => {

    // use react hook form
    const { register, handleSubmit, reset } = useForm();


    // get user
    const [user] = useAuthState(auth);


    // handle form submission

    const onSubmit = data => {

        // save data to fruits collection

        let url = 'https://pure-cliffs-64798.herokuapp.com/fruits';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                // toast
                if (result.insertedId) {
                    toast('Your Item is added successfully!!');
                }
            })




        // save data to my items collection

        const insertedData = {
            email: user.email,
            data
        }

        axios.post('https://pure-cliffs-64798.herokuapp.com/items', insertedData)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    // toast('Your Item is added successfully!!');
                }
                reset();
            })
    };


    return (
        <div className='my-4 pt-2 mx-auto add-container'>
            <h1 className='add-text mb-3'>Add a new fruit item in warehouse</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3 p-1' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-3 p-1' placeholder='Description' {...register("description")} />
                <input className='mb-3 p-1' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-3 p-1' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-3 p-1' placeholder='Supplier Name' type="text" {...register("supplier")} />
                <input className='mb-3 p-1' placeholder='Photo URL' type="text" {...register("img")} />
                <input className='add-btn py-1 px-3' type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;