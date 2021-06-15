import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UserList from '../components/UserList';
import Spinner from '../components/Spinner';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState([true]); //로딩 스피너
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            setUsers(response.data);
            setLoading(false);
        })
    }, []);
    // useEffect(() => {
    //     console.log(users);
    // }, [users]); //users가 변경될 때마다 실행
    return (
        <>
            <h1>Users</h1>
            {loading ? <Spinner /> :
            <UserList users={users}/>}
        </>
    );
};

export default Users;