import React, { useEffect } from 'react'
import AllRoutes from './AllRoutes'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from './context/actions/user'

const App = () => {

    const user = useSelector(state => state.user);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (user) {
            navigate('/', { replace: true })
        }
    }, [navigate, user])

    useEffect(() => {
        if (!user) {
            const currentUser = localStorage.getItem('user');
            dispatch(setUser(JSON.parse(currentUser)));
        }
    }, [dispatch, user])


    return (
        <AllRoutes />
    )
}

export default App