import React, {useState, useEffect } from 'react';
import UsersList from '../../components/usersList/UsersList';
import classes from './BlogPage.module.css'

function BlogPage(props) {
    const [ users, setUsers] = useState([]);


    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
    },[])
    return (
        <div>
            <div className={classes.form}>
                <UsersList users={users}/>
            </div>
        </div>
    );
}

export default BlogPage;