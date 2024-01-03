import React from "react";
import { Helmet } from 'react-helmet';
import { useState } from "react";
import './LoginSignUp.css';

const LoginSignUp = () => {

    const [signup, setSignUp] = useState({});

    const getUserSignUpData = (e) => {
        setSignUp({ ...signup, [e.target.name]: e.target.value });
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
                    <form>
                        <label htmlFor="chk" aria-hidden="true">
                            Sign up
                        </label>
                        <input type="text" name="username" placeholder="User name" required="" onChange={getUserSignUpData}/>
                        <input type="email" name="email" placeholder="Email" required="" onChange={getUserSignUpData}/>
                        <input type="password" name="password" placeholder="Password" required="" onChange={getUserSignUpData}/>
                        <button>Sign up</button>
                    </form>
                </div>

                <div className="ls-login">
                    <form>
                        <label htmlFor="chk" aria-hidden="true">
                            Login
                        </label>
                        <input type="email" name="email" placeholder="Email" required="" />
                        <input type="password" name="pswd" placeholder="Password" required="" />
                        <button>Login</button>
                    </form>
                </div>
            </div>
            </div>
        </>

    );
}

export default LoginSignUp;