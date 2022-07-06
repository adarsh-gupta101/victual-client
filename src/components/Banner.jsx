import React from "react";
import BannerImage from "../banner.webp";

function Banner() {
  return (
    // Breakpoint prefix	Minimum width	CSS
    // sm	640px	@media (min-width: 640px) { ... }
    // md	768px	@media (min-width: 768px) { ... }
    // lg	1024px	@media (min-width: 1024px) { ... }
    // xl	1280px	@media (min-width: 1280px) { ... }
    // 2xl	1536px
    <div style={{ height: "768px" }}>
      {/* <div style={{backgroungImage:" linear-gradient(90deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 72.53%), url(https://cdn.t.shef.com/unsafe/2400x0/center/middle/https://cdn.shef.com/static/media/bas_hero_d.dbb55085.jpg);"
        }}>hi</div> */}
      <div className="relative w-full h-full">
        <img
          src="/assets/banner.webp"
          className="w-full h-full brightness-75 object-cover "
        />
        <div className="absolute top-10 md:top-40 w-11/12 md:w-4/5 bg ">
          <p className="text-4xl md:text-6xl xl:text-7xl text-white font-bold m-6 md:px-28">
            Earn money doing what you love
          </p>
          <p className="text-xl md:text-3xl lg:text-3xl text-white mx-6 md:px-28">
            Sign up to be your own boss and cook whenever you want.
          </p>
          <div className="md:flex m-8 items-center">
            <input
              type="text"
              placeholder="Phone number"
              className="py-1 md:ml-28 mr-6 md:px-6 my-2 h-12 w-2/4 rounded outline-none"
            />
          </div>
          <p className="text-xl text-white p-2 px-9    rounded-3xl mx-8 md:mx-36 my-12 bg-[#d93A4a] w-fit">
            Get Started
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
