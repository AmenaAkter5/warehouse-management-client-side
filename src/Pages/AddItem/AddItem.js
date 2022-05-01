import React from 'react';
import { useForm } from "react-hook-form";



const AddItem = () => {

    // use react hook form
    const { register, handleSubmit, reset } = useForm();


    // add fruit item by form submission
    const onSubmit = data => {
        const url = 'http://localhost:5000/fruits';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
        reset();
    };


    return (
        <div className='w-50 my-4 mx-auto'>
            <h1>Add a new fruit item in warehouse</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3 p-1' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-3 p-1' placeholder='Description' {...register("description")} />
                <input className='mb-3 p-1' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-3 p-1' placeholder='Cart' type="number" {...register("cart")} />
                <input className='mb-3 p-1' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-3 p-1' placeholder='Supplier Name' type="text" {...register("supplier")} />
                <input className='mb-3 p-1' placeholder='Photo URL' type="text" {...register("img")} />
                <input className='p-1' type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;