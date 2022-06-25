import React from "react";

function End() {
  return (
    <div className="mt-24">
      <div className='flex flex-col-reverse md:flex-row items-center justify-around w-4/5 m-auto'>
        <div className="text-center md:text-left">
          <p className='text-4xl font-bold my-6'>Ready to start cooking?</p>
          <p className='text-xl text-gray-600 my-6'>
            Join a community of shefs cooking in your neighborhood.
          </p>
          <p className='text-xl text-center md:text-left bg-[#d93A4a] text-white md:w-fit px-14 p-2 rounded-3xl'>
            Get Started
          </p>
        </div>
        <img
          src='https://cdn.shef.com/static/media/bas-footer.44430a34.png'
          alt=''
          className='md:w-1/2'
        />
      </div>
<p className='mt-16 p-2 md:mx-24'>¹ Delivery methods vary based on local regulations.

</p>
      <div className='bg-[#d93A4a] text-white flex flex-col-reverse md:flex-row justify-evenly items-start p-4 md:p-8 mt-16'>
        <div>
          <img src='/assets/shef.svg' alt=''></img>
          <p className=' text-xl font-bold'>There's No Taste Like Home</p>
        </div>
      
<div className="flex bg-black items-start px-6 justify-around ">
      <ul className="text-white p-2">
        <li className="font-bold">Learn</li>
        <li>Our Story</li>
        <li>Help Center</li>
        <li>Food Safety</li>
        <li>Blog</li>
      </ul>
      <ul className="text-white p-2">
        <li className="font-bold">Follow</li>
        <li>Facebook</li>
        <li>Instagram</li>
        <li> Twitter</li>
        <li>Blog</li>
      </ul>  <ul className="text-white p-2 mx-2">
        <li className="font-bold">Resources</li>
        <li>Become a shef</li>
        <li>Careers</li>
        <li> Gift Cards</li>
      </ul>
      </div>
    </div>
    <div className="bg-black text-white flex p-2 justify-evenly"><p className="hidden md:block">© Shef, Inc. 2020. All Rights Reserved. </p><p>    Privacy Policy</p> <p>Terms of Service</p></div></div>
  );
}

export default End;
