import { Link } from 'react-router-dom'
import { Navbar } from 'flowbite-react'
import React from 'react'

export default function Header() {
  return (
    <Navbar className='border-b-2'>
        <Link to='/' className='text-sm sm:text-xl font-semibold dark:text-white self-center whitespace-nowrap'>
            <span className='px-2 py-1  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white '>Cliff's</span>
            Blog
        </Link>
    </Navbar>
  )
}
