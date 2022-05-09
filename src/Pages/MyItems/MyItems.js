import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';
import MyItemsDetail from '../MyItemsDetail/MyItemsDetail';



const MyItems = () => {

    // my items data state
    const [myItems, setMyItems] = useState([]);


    // get user
    const [user] = useAuthState(auth);


    // use navigate hook
    const navigate = useNavigate();


    // fetch data
    useEffect(() => {

        const getMyItems = async () => {

            // get email
            const mail = user?.email;

            const url = `https://pure-cliffs-64798.herokuapp.com/items?email=${mail}`

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


    // Delete items button handler
    const handleDeleteItems = id => {

        const proceed = window.confirm('Are you sure to delete?');

        if (proceed) {

            const url = `https://pure-cliffs-64798.herokuapp.com/fruits/${id}`

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = myItems.filter(myItem => myItem._id !== id);
                    setMyItems(remaining);
                })
        }
    };

    return (
        <section className='inventories-section py-5'>
            <div className='mx-auto my-5 container'>
                <div className="title-text">
                    <p>Your Items</p>
                    <h1 className='mb-0 pb-0'>All Items Are Added By You</h1>
                </div>
                <div className='ineventory-container'>
                    {
                        myItems.map(myItem => <MyItemsDetail
                            key={myItem._id}
                            items={myItem}
                            handleDeleteItems={handleDeleteItems}
                        ></MyItemsDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default MyItems;