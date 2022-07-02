import React, {useState } from 'react';
import UsersList from '../../components/UsersList/usersList';

function MainPage(props) {
    const [ users, setUsers] = useState([]);

    const getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
    }
    return (
        <div>
            <h1>Main Page</h1>
            <button onClick={getUsers}>submit</button>
            <UsersList users={users}/>
        </div>
    );
}

export default MainPage;
