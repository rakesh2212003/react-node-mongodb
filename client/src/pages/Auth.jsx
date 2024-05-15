import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { Input, Button } from '../components'
import { setUser } from '../context/actions/user'
import * as api from '../api'

const Auth = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isSignup, setIsSignup] = useState(true);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignup) {
            if (password !== cpassword){
                alert('Password not match');
                return;
            }
            api.SIGNUP({firstname,lastname,email,password}).then((user) => {
                dispatch(setUser(user.data));
                navigate('/', {replace: true})
            })
        } else {
            api.LOGIN({ email,password }).then((user) => {
                dispatch(setUser(user.data));
                navigate('/' ,{replace: true});
            })
        }
    }

    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center bg-lightOverlay gap-4'>
            <div className='w-[450px] flex flex-col items-center justify-center gap-4 rounded-3xl border border-gray-200 shadow-lg px-4 py-8 bg-white'>
                <h1 className='text-3xl font-bold'>
                    {isSignup ? 'Signup' : 'Login'}
                </h1>

                <form
                    onSubmit={handleSubmit}
                    className='w-full h-auto flex flex-col justify-center items-center gap-4'
                >
                    {isSignup && (
                        <div className='w-full flex items-center justify-center gap-4'>
                            <Input
                                type={'text'}
                                id={'firstname'}
                                name={'Firstname'}
                                inputState={firstname}
                                inputStateFunction={setFirstname}
                            />

                            <Input
                                type={'text'}
                                id={'lastname'}
                                name={'Lastname'}
                                inputState={lastname}
                                inputStateFunction={setLastname}
                            />
                        </div>
                    )}

                    <div className='w-full'>
                        <Input
                            type={'email'}
                            id={'email'}
                            name={'Email'}
                            inputState={email}
                            inputStateFunction={setEmail}
                        />
                    </div>


                    <div className='w-full flex items-center justify-center gap-4'>
                        <Input
                            type={'password'}
                            id={'password'}
                            name={'Password'}
                            inputState={password}
                            inputStateFunction={setPassword}
                        />
                        {isSignup && (
                            <Input
                                type={'password'}
                                id={'cpassword'}
                                name={'Confirm Password'}
                                inputState={cpassword}
                                inputStateFunction={setCpassword}
                            />
                        )}
                    </div>
                    <Button type={'submit'} name={`${isSignup ? 'Signup' : 'Login'}`} />
                </form>
            </div>
            <p className='text-sm font-semibold'>
                {isSignup
                    ? 'Already have an account:'
                    : 'Don\'t have an account:'
                }
                {" "}
                <span
                    onClick={() => setIsSignup(!isSignup)}
                    className='text-primary font-semibold cursor-pointer'
                >
                    {isSignup
                        ? 'Login'
                        : 'Signup'
                    }
                </span>
            </p>
        </div>
    )
}

export default Auth