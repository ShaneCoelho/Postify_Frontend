import React from "react";
import { Helmet } from 'react-helmet';
import { useState } from "react";
import axios from 'axios';
import './LoginSignUp.css';
import { useDispatch } from "react-redux";
import { addToken } from "../store/slices/TokenSlice";

const LoginSignUp = () => {

    const [signup, setSignUp] = useState({});
    const [login, setLogIn] = useState({});
    const dispatch = useDispatch();

    const getUserSignUpData = (e) => {
        setSignUp({ ...signup, [e.target.name]: e.target.value });
    };

    const getUserLogInData = (e) => {
        setLogIn({ ...login, [e.target.name]: e.target.value });
    };

    const handleSignUpSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://646b-115-69-246-177.ngrok-free.app/api/auth/signup', signup);

            // Handle the response as needed
            dispatch(addToken(response.data.token));
            // console.log('Response from server:', response.data.token);
        } catch (error) {
            console.error('Error making API call:', error);
        }
    };

    const handleLogInSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://646b-115-69-246-177.ngrok-free.app/api/auth/signin', login);

            // Handle the response as needed
            dispatch(addToken(response.data.token));
            // console.log('Response from server:', response.data.token);
        } catch (error) {
            console.error('Error making API call:', error);
        }
    };


    return (
        <>
            <Helmet>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap"
                />
            </Helmet>
            <div className="ls-body">
                <div className="ls-main">
                    <input type="checkbox" id="chk" aria-hidden="true" />

                    <div className="ls-signup">
                        <form onSubmit={handleSignUpSubmit}>
                            <label htmlFor="chk" aria-hidden="true">
                                Sign up
                            </label>
                            <input type="text" name="username" placeholder="User name" required="" onChange={getUserSignUpData} />
                            <input type="email" name="email" placeholder="Email" required="" onChange={getUserSignUpData} />
                            <input type="password" name="password" placeholder="Password" required="" onChange={getUserSignUpData} />
                            <button type="submit">Sign up</button>
                        </form>
                    </div>

                    <div className="ls-login">
                        <form onSubmit={handleLogInSubmit}>
                            <label htmlFor="chk" aria-hidden="true">
                                Login
                            </label>
                            <input type="text" name="username" placeholder="Username" required="" onChange={getUserLogInData}/>
                            <input type="password" name="password" placeholder="Password" required="" onChange={getUserLogInData}/>
                            <button type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>

    );
}

export default LoginSignUp;