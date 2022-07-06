import React from "react";

function End() {
  return (
    <div className="mt-24">
      <div className="flex flex-col-reverse md:flex-row items-center justify-around w-4/5 m-auto">
        <div className="text-center md:text-left">
          <p className="text-4xl font-bold my-6">Want to Cook for us?</p>
          <p className="text-xl text-gray-600 my-6">
            Join a community of shefs cooking in your neighborhood.
          </p>
          <p className="text-xl text-center md:text-left bg-[#d93A4a] text-white md:w-fit px-14 p-2 rounded-3xl">
            Get Started
          </p>
        </div>
        <img
          src="https://cdn.shef.com/static/media/bas-footer.44430a34.png"
          alt=""
          className="md:w-1/2"
        />
      </div>
      <p className="mt-16 p-2 md:mx-24">
        ¹ Delivery methods vary based on local regulations.
      </p>
      <div className="bg-[#d93A4a] text-white flex flex-col-reverse md:flex-row justify-evenly items-start px-2  md:py-24 mt-16">
        <div>
          <img src="/assets/shef.svg" alt="" className=""></img>
          <p className=" text-sm md:text-xl font-bold md:text-left w-fit m-auto mx-1/2">
            There's No Taste Like Home
          </p>
        </div>

        <div className="flex  items-start md:px-6 justify-around ">
          <ul className="text-white p-2 md:text-lg text-sm">
            <li className="font-bold">Learn</li>
            <li>Our Story</li>
            <li>Help Center</li>
            <li>Food Safety</li>
            <li>Blog</li>
          </ul>
          <ul className="text-white p-2 md:text-lg text-sm">
            <li className="font-bold">Follow</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li> Twitter</li>
            <li>Blog</li>
          </ul>{" "}
          <ul className="text-white p-2 md:text-lg text-sm">
            <li className="font-bold">Resources</li>
            <li>Become a shef</li>
            <li>Careers</li>
            <li> Gift Cards</li>
          </ul>
        </div>
      </div>
      <div className="bg-black text-white flex p-2 justify-evenly">
        <p className="hidden md:block">
          © Shef, Inc. 2020. All Rights Reserved.{" "}
        </p>
        <p> Privacy Policy</p> <p>Terms of Service</p>
      </div>
    </div>
  );
}

export default End;
