import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import logo from '../../../images/Google.jpg';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import useToken from '../../../hooks/useToken';



const SocialLogin = () => {

    // sign in user hook
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);


    // page redirect handle after get user
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";


    // use token
    const [token] = useToken(user);


    // loading page
    if (loading) {
        return <Loading></Loading>
    }


    // error handle
    let errorElement;

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }



    // handle google sign in button
    const handleGooleSignIn = () => {
        signInWithGoogle();
    }



    // after get verified user redirect to the previous page
    if (token) {
        navigate(from, { replace: true });
    }


    return (
        <div>
            {errorElement}
            <button onClick={handleGooleSignIn} className='google-sign'>
                <img src={logo} alt="" />
                <p>Continue with Google</p>
            </button>
        </div>
    );
};

export default SocialLogin;