import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';
import MyItemsDetail from '../MyItemsDetail/MyItemsDetail';



const MyItems = () => {
    const [user] = useAuthState(auth);

    const [myItems, setMyItems] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {

        const getMyItems = async () => {
            const email = user?.email;
            // console.log(email);
            const url = `http://localhost:5000/items?email=${email}`
            try {
                const { data } = await axiosPrivate.get(url)
                setMyItems(data);
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getMyItems();
    }, [user, navigate])


    // Delete button handler of manage inventory page
    const handleDeleteItems = id => {

        const proceed = window.confirm('Are you sure to delete?');

        if (proceed) {
            const url = `http://localhost:5000/items/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = myItems.filter(myItem => myItem._id !== id);
                    setMyItems(remaining);
                })
        }
    };

    return (
        <section className='inventories-section py-5 mb-5'>
            <div className='mx-auto my-5 container'>
                <div className="title-text">
                    <p>Your Items</p>
                    <h1 className='mb-0 pb-0'>All Items Are Added By You</h1>
                </div>
                {/* <ul>
                    {
                        myItems.map(myItem => <li
                            key={myItem._id}>
                            {myItem.email}: {myItem.data.name} <button onClick={() => handleDeleteItems(myItem._id)}>X</button>
                        </li>)
                    }
                </ul> */}
                <div className='ineventory-container'>
                    {
                        myItems.map(myItem => <MyItemsDetail
                            key={myItem._id}
                            id={myItem._id}
                            items={myItem.data}
                            handleDeleteItems={handleDeleteItems}
                        ></MyItemsDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default MyItems;