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


    const [user] = useAuthState(auth);


    // handle form submission
    const onSubmit = data => {

        // save data to fruits collection
        let url = 'http://localhost:5000/fruits';
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


        const insertedData = {
            email: user.email,
            data
        }

        // save data to my items collection
        /* url = 'http://localhost:5000/items';
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
            }) */

        axios.post('http://localhost:5000/items', insertedData)
            .then(response => {
                // console.log(response);
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
                {/* <input className='mb-3 p-1' placeholder='Email' {...register("email", { required: true, maxLength: 20 })} /> */}
                <input className='mb-3 p-1' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-3 p-1' placeholder='Description' {...register("description")} />
                <input className='mb-3 p-1' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-3 p-1' placeholder='Cart' type="number" {...register("cart")} />
                <input className='mb-3 p-1' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-3 p-1' placeholder='Supplier Name' type="text" {...register("supplier")} />
                <input className='mb-3 p-1' placeholder='Photo URL' type="text" {...register("img")} />
                <input className='add-btn p-1' type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;