import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import LoginForm from "../components/LoginForm";

function Login() {
    return (

        <div>
            <h1><Link to={'/'}>Climax Studio</Link></h1>
            <Header />
            <LoginForm/>


        </div>

    );
}
export default Login;