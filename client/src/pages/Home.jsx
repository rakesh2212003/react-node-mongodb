import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='w-screen h-auto min-h-screen flex flex-col items-center justify-center'>
            Home
            <Link to={'/auth'}>Go to Auth</Link>
        </div>
    )
}

export default Home