import React from 'react';
import './AddItem.css';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';



const AddItem = () => {


    // get user
    const [user] = useAuthState(auth);


    // use react hook form
    const { register, handleSubmit, reset } = useForm();



    // handle form submission

    const onSubmit = data => {

        const insertedData = {
            email: user?.email,
            name: data.name,
            description: data.description,
            price: data.price,
            quantity: data.quantity,
            supplier: data.supplier,
            img: data.img
        }

        axios.post('https://pure-cliffs-64798.herokuapp.com/fruits', insertedData)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your Item is added successfully!!');
                }
                reset();
            })
    };


    return (
        <div className='my-4 pt-2 mx-auto add-container'>
            <h1 className='add-text mb-3'>Add a new fruit item in warehouse</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3 p-1' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-3 p-1' placeholder='Description' {...register("description", { required: true })} />
                <input className='mb-3 p-1' placeholder='Price' type="number" {...register("price", { required: true })} />
                <input className='mb-3 p-1' placeholder='Quantity' type="number" {...register("quantity", { required: true })} />
                <input className='mb-3 p-1' placeholder='Supplier Name' type="text" {...register("supplier", { required: true })} />
                <input className='mb-3 p-1' placeholder='Photo URL' type="text" {...register("img", { required: true })} />
                <input className='add-btn py-1 px-3' type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;