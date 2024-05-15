import React from 'react'
import { motion } from 'framer-motion'

import { click } from '../animation'

const Button = ({ type, name }) => {
    return (
        <motion.button
            {...click}
                type={type}
                className='w-full bg-primary py-3 rounded-xl cursor-pointer text-textColor font-semibold shadow-lg'
            >
                {name}
        </motion.button>
    )
}

export default Button