import React from 'react';

function UsersList (props){
    return (
        <div>
            <h3>TABLE</h3>
            <table>

                <thead>

                <tr>

                    <td>#</td>
                    <td>name</td>
                    <td>email</td>
                    <td>username</td>

                </tr>
                </thead>
                <tbody>

                {props.users.map((user, key) => {
                    return (
                        <tr key={key}>

                            <td>{user.id}</td>

                            <td>{user.name}</td>

                            <td>{user.email}</td>

                            <td>{user.username}</td>
                        </tr>
                    )
                })}
                </tbody>

            </table>
        </div>
    )
}

export default UsersList;