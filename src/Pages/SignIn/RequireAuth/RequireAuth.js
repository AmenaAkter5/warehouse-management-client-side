import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
// import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';


const RequireAuth = ({ children }) => {

    // get user 
    const [user, loading] = useAuthState(auth);

    // use email verification hook
    // const [sendEmailVerification] = useSendEmailVerification(auth);

    // get location
    const location = useLocation();

    // redirect to loading spinner
    if (loading) {
        return <Loading></Loading>
    }

    // redirect to sign in page if user is not logged in
    if (!user) {
        return <Navigate to='/signin' state={{ from: location }} replace></Navigate >
    }

    // if users email is not verified 
    /* if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div className='text-center mt-5'>
            <h3 className='text-danger'>Your Email is not verified!!</h3>
            <h5 className='text-success'> Please Verify your email address</h5>
            <button
                className='btn btn-primary'
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent email');
                }}
            >
                Send Email to Verify Again
            </button>
        </div>
    } */

    // if user is logged in then expected page is shown
    return children;
};

export default RequireAuth;