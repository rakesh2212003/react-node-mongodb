import React from 'react'
import { GlobalSearch } from '../components'

const Navbar = () => {
    return (
        <div className='absolute w-full h-16 top-0 flex justify-center items-center'>
            <GlobalSearch />
        </div>
    )
}

export default Navbar