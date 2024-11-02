import React from "react";
import '../styles/loginform.css';

function LoginForm() {
    return (

        <div>
            <div className="login-box">
                <p>Login</p>
                <form>
                    <div className="user-box">
                        <input required name type="text" />
                        <label>Email</label>
                    </div>
                    <div className="user-box">
                        <input required name type="password" />
                        <label>Password</label>
                    </div>
                    <a href="#">Submit</a>
                </form>
            </div>
        </div>

    );
}
export default LoginForm;