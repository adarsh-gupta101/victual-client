import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Sliders() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.9,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div style={{ overflow: "hidden" }} className='mt-24 bg-[#f7f7f7] pb-16'>
      <h2 className='text-[#d93A4a]   text-4xl font-bold m-10  md:m-24'>
        {" "}
        How to sell on Shef
      </h2>
      <Slider {...settings} st>
        <div className="p-5 md:p-0">
          <img src='/assets/1.webp' className='w-4/5 object-contain' />
          <h3 className='text-[#d93A4a]   text-3xl font-bold mt-8'>Step 1</h3>
          <p className='text-3xl font-bold py-3'>Get approved to cook</p>
          <p className='text-lg'>
            Sign up and submit a sample of your favorite dishes. Pass the food
            tasting, complete an accredited food safety exam, and choose your
            menu of dishes.
          </p>
        </div>
        <div className="p-5 md:p-0">
          <img src='/assets/2.webp' className='w-4/5 object-contain' />

          <h3 className='text-[#d93A4a]   text-3xl font-bold mt-8'>Step 2</h3>
          <p className='text-3xl font-bold py-3'>Pick your schedule</p>
          <p className='text-lg'>
            Choose the days you’d like to cook. As little or as much as you’d
            like.
          </p>
        </div>
        <div className="p-5 md:p-0">
          <img src='/assets/3.webp' className='w-4/5 object-contain' />

          <h3 className='text-[#d93A4a]   text-3xl font-bold mt-8'>Step 3</h3>
          <p className='text-3xl font-bold py-3'>Prepare your orders</p>
          <p className='text-lg'>
            Customers can start ordering from you on Shef. They’ll order at
            least a day in advance so you have enough time to get ingredients
            and prepare their dishes.
          </p>
        </div>
        <div className="p-5 md:p-0 md:text-center">
          <img src='/assets/4.webp' className='w-4/5 object-contain' />

          <h3 className='text-[#d93A4a]   text-3xl font-bold mt-8'>Step 4</h3>
          <p className='text-3xl font-bold py-3'>Cool your dishes</p>
          <p className='text-lg'>
            Once you’ve finished cooking, safely cool your dishes and prepare
            them for delivery.
          </p>
        </div>
      </Slider>
    </div>
  );
}

export default Sliders;
