import {Button, Label, TextInput} from 'flowbite-react'

import { Link } from 'react-router-dom'
import React from 'react'

export default function SignUp() {
  return (
    <div className='min-h-screen mt-20'>
        <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
            {/* Div for the Left side */}
            <div className="flex-1">
            <Link to='/' className='font-bold dark:text-white  text-4xl'>
            <span className='px-2 py-1  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white '>Cliff's</span>
            Blog
        </Link>
        <p className='text-sm mt-5'>
            This is Cliff Gor's blog showcasing what i learn and what i do.
        </p>
            </div>
            {/* Div for the Right side */}
            <div className="flex-1">
                <form className="flex flex-col gap-4">
                    <div>
                        <Label value='Your Username' />
                        <TextInput type='text' placeholder='Username' id='username'/>
                    </div>
                    <div>
                        <Label value='Your email' />
                        <TextInput type='text' placeholder='name@email.com' id='email'/>
                    </div>
                    <div>
                        <Label value='Your Password' />
                        <TextInput type='text' placeholder='Password' id='password'/>
                    </div>
                    <Button gradientDuoTone='purpleToPink' type='submit'>
                        Sign Up
                    </Button>
                </form>
                <div className="flex gap-2 text-sm mt-5">
                    <span className='text-sm'>Already have an account?</span>
                    <Link to='/signin' className='text-sm text-blue-500'>Sign In</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
