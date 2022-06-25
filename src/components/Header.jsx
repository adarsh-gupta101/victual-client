import React from 'react'

function Header() {
  return (
    <div className='flex justify-between p-4'>
        <div className='flex items-center  w-1/3 justify-evenly'>
        <img src="assets/shef.svg " className='w-20'></img>
        
        <p className='text-gray-500 font-bold text-xl hidden md:block' style={{fontFamily: 'Nunito'}}>Our Story</p>
        <p className='text-gray-500 font-bold text-xl hidden md:block' style={{fontFamily: 'Nunito'}}>Become a shef</p>
        </div>
        <p className='text-gray-500 font-bold text-xl hidden md:block' style={{fontFamily: 'Nunito'}}>Log In</p>

    </div>
  )
}

export default Header