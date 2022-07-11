import React from 'react';
import {useNavigate} from "react-router-dom";

function LoginPage(props) {
<<<<<<< HEAD
    const navigate = useNavigate()

    const loginUser = () => {
        setTimeout(()=> {
            navigate("/blogs", {replace: true, state: "hello"})
=======
    const navigate = useNavigate();

    const loginUser = () => {
        setTimeout(() => {
            navigate("/", {replace: true, state: "hello"})
>>>>>>> origin/master
        }, 3000)
    }

    return (
        <div className="container">
            <input type="text" placeholder="login"/>
<<<<<<< HEAD
            <input type="text" placeholder="pass"/>
=======
            <input type="text" placeholder="password"/>
>>>>>>> origin/master
            <button onClick={loginUser}>login</button>
        </div>
    );
}

export default LoginPage;