import React from 'react'
import { motion } from 'framer-motion'

import { click } from '../animation'

const GlobalSearch = () => {
    return (
        <motion.div
            {...click}
            className='w-[40%] p-3 border border-gray-300 rounded-xl flex justify-center items-center'
        >
            <input
                type='search'
                placeholder='Global Search'
                className='w-full font-medium text-sm placeholder:text-center'
            />
        </motion.div>
    )
}

export default GlobalSearch