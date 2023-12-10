import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigition() {
    return (
        <nav className='h-[50px] flex justify-between px-5 bg-gray-500 text-wite items-center'  >
            <span className='font-bold'>React 2023</span>
            <span>
                <Link to='/' className='mr-2'>Products</Link>
                <Link to='/about'>About</Link>
            </span>
        </nav>
    )
}