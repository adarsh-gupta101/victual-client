import React from "react";

function GetApp() {
  return (
    <div className='md:flex-row flex flex-col p-8 justify-center items-center'>
      <img
        src='https://b.zmtcdn.com/data/o2_assets/a500ffc2ab483bc6a550aa635f4e55531648107832.png'
        alt=''
        className='md:w-1/3'
      />

      <div>
        <p className='text-2xl font-bold text-gray-500 my-4 '>Get the Victual app</p>
        <p>
          We will send you a link, open it on your phone to download the app
        </p>
        <div className='flex p-0 py-4 justify-start items-ce'>
            <div className="mx-4 ">
          <input type='radio' name='app' id='app' value='ios' className="mr-2"/>
          <label htmlFor='app'>Email</label>
          <br /></div>
          <div>
          <input type='radio' name='app' id='apps' value='android' className="mx-2"/>
          <label htmlFor='apps'>Phone</label>
          <br /></div>
        </div>
        <input type='email' name='email' placeholder='Enter your email' className="p-2 border-2 border-pink-500 w-full md:w-fit" />

        <button className="mx-2 bg-pink-400 text-white p-2 font-bold mt-4 md:mt-0">Share App Link</button>
        <div className='flex mt-4 justify-center md:justify-start'>
          <img
            src='https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png'
            className='w-36 h-auto object-contain p-2'
            alt=''
          />
          <img
            src='https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png'
            className='w-36 h-auto object-contain p-2'
            alt=''
          />
        </div>
      </div>
    </div>
  );
}

export default GetApp;
