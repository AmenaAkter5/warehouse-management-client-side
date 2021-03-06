import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import auth from './../../../firebase.init';
import register from '../../../images/register.png';
import './Register.css';
import useToken from '../../../hooks/useToken';



const Register = () => {

    // display custom error state
    const [customError, setCustomError] = useState('');


    // navigate to sign in page
    const navigateSignIn = () => {
        navigate('/signin');
    }


    // page redirect handle after get user
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    // create user hook
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    // use token
    const [token] = useToken(user);


    // update profile hook
    const [updateProfile, updating] = useUpdateProfile(auth);


    // loading page handle
    if (loading || updating) {
        return <Loading></Loading>
    }


    // register the new user
    const handleCreateUser = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        if (password !== confirmPassword) {
            setCustomError('Your two passwords did not match')
            return;
        }
        if (password.length < 6) {
            setCustomError('Password must be longer than 6 characters')
            return;
        }
        setCustomError('');

        // create user
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    }


    // after get verified user redirect to the previous page
    if (token) {
        navigate(from, { replace: true })
    }


    return (
        <section className='register-section'>
            <div className='container register-container'>
                <div className='image-container'>
                    <img className='register-img' src={register} alt="" />
                </div>
                <div className='form-container register'>
                    <div>
                        <h1 className='form-title my-4'>Register Please</h1>
                        <form onSubmit={handleCreateUser}>
                            <div className='input-group'>
                                <input type="text" name="name" id="" placeholder='Enter Your Name' required />
                            </div>
                            <div className='input-group'>
                                <input type="email" name="email" id="" placeholder='Enter Email' required />
                            </div>
                            <div className='input-group'>
                                <input type="password" name="password" id="" placeholder='Enter Password' required />
                            </div>
                            <div className='input-group'>
                                <input type="password" name="confirmPassword" id="" placeholder='Confirm Your Password' required />
                            </div>
                            <p>{loading && 'Loading...'}</p>
                            <p className='error-message'>{error && error?.message}</p>
                            <p className='error-message'>{customError}</p>
                            <input className='form-submit' type="submit" value="Register" />
                        </form>
                        <p>
                            Already have an account? <Link className='form-link' to="/signin" onClick={navigateSignIn}>Sign in</Link>
                        </p>
                        <div className='divider-line'>
                            <span className="line"></span><p>or</p><span className="line"></span>
                        </div>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;