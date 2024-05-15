import React, { useState } from 'react'

const Input = ({ type,id,name,inputState,inputStateFunction }) => {

    const [isFocus, setIsFocus] = useState(false);

    return (
        <div
            className={`w-full relative p-3 flex flex-col items-start justify-center border rounded-xl transition-all duration-300
                ${isFocus ? 'border-gray-800' : 'border-gray-400'}
            `}
        >
            <label
                htmlFor={id}
                className={`absolute px-1 pointer-events-none font-medium bg-white transition-all duration-300
                    ${isFocus || inputState 
                        ? '-translate-y-6 text-gray-800 text-xs' 
                        : 'translate-y-0 text-gray-400 text-sm'
                    }
                `}
            >
                {name}
            </label>
            <input
                type={type}
                id={id}
                name={name}
                value={inputState}
                onChange={(e) => inputStateFunction(e.target.value)}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                className='w-full font-medium text-sm bg-transparent'
            />
        </div>
    )
}

export default Input