import React from 'react';
import {NavLink} from "react-router-dom";

<<<<<<< HEAD
function Header() {
    return (
        <ul className="container">
            <li>
                <NavLink to="/"> main page</NavLink>
            </li>
            <li>
                <NavLink to="/blogs"> blogs</NavLink>
=======
function Header(props) {
    return (
        <ul className="container">
            <li>
                <NavLink to="/">main page</NavLink>
            </li>
            <li>
                <NavLink to="/blogs">blogs page</NavLink>
>>>>>>> origin/master
            </li>
        </ul>
    );
}
<<<<<<< HEAD

=======
>>>>>>> origin/master
export default Header;