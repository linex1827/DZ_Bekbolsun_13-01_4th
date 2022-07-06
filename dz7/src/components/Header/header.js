import React from 'react';
import { //Link,
    NavLink} from "react-router-dom";
import classes from "./header.module.css"



function Header(props) {
    // const navigate = useNavigate();

    // const backTo =() => {
    //   navigate(-1)
    // }

    return (
        <div className='menu'>
                <li>
                    <NavLink to='/' className={classes.link}>Главная</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={classes.link}>О нас</NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio" className={classes.link}>Портфолио</NavLink>
                </li>

        </div>
    );
}

export default Header;