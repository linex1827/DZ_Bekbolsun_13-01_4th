import React from 'react';
<<<<<<< HEAD

function MainPage(props) {
    return (
        <div className="container">
            <h1>Main Page</h1>
=======
import {useLocation} from "react-router-dom";
import Header from "../../components/header/Header";

function MainPage(props) {
    const location = useLocation();
    console.log(location);

    return (
        <div className="container">
            <h1>Main page</h1>
>>>>>>> origin/master
        </div>
    );
}

export default MainPage;