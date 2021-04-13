import React, { useEffect, useState } from 'react';
import userService from './services/userService.js'


function App() {

    const [ users, setUsers ] = useState;
    const [ fullName, setFullName ] = useState;

    useEffect(() => {
        loadUsers()
    }, []);


    const loadUsers = async () => {
        const users = await userService.query()
        setUsers(users)
    }

    const showName = () => {
        alert(fullName);
    };

    const handleNameInput = e => {
        setFullName( e.target.value );
    };

            return (
            <div>
                <h3>This is a Class Component</h3>
                <h4>{users.length}</h4>
                <input
                    type="text"
                    onChange={handleNameInput}
                    value={fullName}
                    placeholder="Your Name"
                />
                <button onClick={showName}>
                    Alert
        </button>
            </div>
        );
}

export default App;