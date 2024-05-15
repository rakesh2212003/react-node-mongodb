import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Home, Auth } from './pages'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/auth' element={<Auth />} />
        </Routes>   
    )
}

export default AllRoutes