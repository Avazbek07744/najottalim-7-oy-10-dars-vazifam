import React from 'react'
import Left from './Left'
import Right from './Right'

const MainLeout = ({ children }) => {
    return (
        <div>
            <div className='w-[16vw] bg-[#000000] text-[#ABABAB] fixed top-0 left-0 h-[100vh]'>
                <Left />
            </div>
            <div className='w-[68vw] mx-auto'>
                {children}
            </div>
            <div className='w-[16vw] bg-[#000000] text-[#ABABAB] fixed top-0 right-0 h-[100vh]'>
                <Right />
            </div>
        </div>
    )
}

export default MainLeout
