import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { apiAcc } from '../../apiConnect/api';

const Login = () => {

    const router = useRouter()
    const [user, setUser] = useState({ username: '', password: '' });


    const loginHandler = (acc) => {
        acc.preventDefault();
        console.log(user);
        apiAcc
            .post('/accounts/login', user)
            .then((res) => {
                localStorage.setItem('isLoggedIn', res.data.jwt);
                router.replace('/library');
            })
            .catch((err) => console.log(err));
    };


    return (
        <div>
            <form onSubmit={loginHandler}>
                <div className='form-group'>
                    <label htmlFor='username'></label>
                    <input
                        className='form-control'
                        type='text'
                        name='username'
                        placeholder='USERNAME'
                        value={user.username}
                        onChange={(e) => {
                            setUser({ ...user, username: e.target.value });
                        }}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'></label>
                    <input
                        className='form-control'
                        type='password'
                        name='username'
                        placeholder='USERNAME'
                        value={user.password}
                        onChange={(e) => {
                            setUser({ ...user, password: e.target.value });
                        }}
                    />
                </div>
                <input
                    type='submit'
                    className='btn btn-success'
                    value='LOGIN'
                />
            </form>
        </div>
    );
};

export default Login;
