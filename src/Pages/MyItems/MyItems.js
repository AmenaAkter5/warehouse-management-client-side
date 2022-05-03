import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
// import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);

    const [myItems, setMyItems] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {

        const getMyItems = async () => {
            const email = user?.email;
            console.log(email);
            const url = `http://localhost:5000/items?email=${email}`
            try {
                const { data } = await axiosPrivate.get(url)

                /* const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                }); */
                console.log(data);
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
    }, [user])

    return (
        <div className='w-50 mx-auto'>
            <h1>Your Items: {myItems.length}</h1>
            <ul>
                {
                    myItems.map(myItem => <li key={myItem._id}>
                        {myItem.email}: {myItem.data.name}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default MyItems;