import React from "react";
import {Squash as Hamburger} from "hamburger-react"
import Sidebar from "./utils/Sidebar";


function Header({ chef, setChef }) {
  const [open, setopen] = React.useState(false);

  return (
    <div className="">
    <nav className='bg-white border-gray-200 px-2 sm:px-4 py-1 relative'>
      <div className='container flex flex-wrap justify-between items-center mx-auto'>
      <div className='flex md:flex items-center z-20' style={{marginLeft:"0%"}}>
        <Hamburger
          toggle={() => {
            setopen(!open);
          }}
          toggled={open}
          className='bhm flex md:hidden z-10'
          color="#d93A4A"
        />
                  <img src='/assets/victual.jfif' className='h-24 object-cover z-10' />

        {/* <Sidebar /> */}
      </div>
    
        {/* <a href='/' class='flex items-center'>
          {/* <img src="assets/shef.svg " className="w-20" alt="shef Logo" /> */}
          {/* <p className="font-bold text-2xl text-pink-500">Victual</p> */}
        
        <div className='flex md:order-2'>
          <button
            type='button'
            data-collapse-toggle='mobile-menu-3'
            aria-controls='mobile-menu-3'
            aria-expanded='false'
            className='md:hidden text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 mr-1'>
            <svg
              className='w-5 h-5'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                clipRule='evenodd'></path>
            </svg>
          </button>
          <div className='hidden relative md:block'>
            {/* <div class='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
              <svg
                className='w-5 h-5 text-gray-500'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fill-rule='evenodd'
                  d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                  clipRule='evenodd'></path>
              </svg>
            </div> */}
            {/* <input
              type='text'
              id='search-navbar'
              className='block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500'
              placeholder='Search...'
            /> */}
          </div>
          <button
            type='button'
            className='text-white bg-[#d93A4A] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-2 md:mr-0'>
            Login
          </button>
          <button
            data-collapse-toggle='mobile-menu-3'
            type='button'
            className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'
            aria-controls='mobile-menu-3'
            aria-expanded='false'>
            {/* <svg
              className='w-6 h-6'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fill-rule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clipRule='evenodd'></path>
            </svg> */}
            {/* <svg
              className='hidden w-6 h-6'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fill-rule='evenodd'
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clipRule='evenodd'></path>
            </svg> */}
          </button>
        </div>
        <div
          className='hidden justify-between items-center w-full md:flex md:w-auto md:order-1'
          id='mobile-menu-3'>
          <div className='relative mt-3 md:hidden'>
            <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
              <svg
                className='w-5 h-5 text-gray-500'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                  clipRule='evenodd'></path>
              </svg>
            </div>
            {/* <input
              type='text'
              id='search-navbar'
              className='block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500'
              placeholder='Search...'
            /> */}
          </div>
          <ul className='flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium'>
            <li>
              <a
                href='#'
                className='block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-[#d93A4A] md:p-0'
                aria-current='page'>
                Home
              </a>
            </li>

            <li>
              <a
                href='#'
                className='block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-[#d93A4A] md:p-0'
                aria-current='page'>
                My Order{" "}
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:text-[#d93A4A] md:p-0'
                onClick={() => setChef(!chef)}>
                {chef ? "Order now" : "Become a Shef"}
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block py-2 pr-4 pl-3 text-[#d93A4A] border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0'>
                {chef ? "Your Orders" : "Cart"}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    {open ? (
        <div classNameName='absolute h-full  top-10 '>
          {" "}
          <Sidebar />
        </div>
      ) : null}
    </div>
  );
}

export default Header;
