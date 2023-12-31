import React from "react";
import { Helmet } from 'react-helmet';
import './LoginSignUp.css';

const LoginSignUp = () => {
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
                        <input type="text" name="txt" placeholder="User name" required="" />
                        <input type="email" name="email" placeholder="Email" required="" />
                        <input type="password" name="pswd" placeholder="Password" required="" />
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