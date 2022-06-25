import React from "react";

function Testimonial() {
  const data = [
    {
      img: "https://cdn.t.shef.com/unsafe/600x0/center/middle/https://cdn.shef.com/static/media/supriya.aa5064d1.jpg",
      text: "I consider this a dream job. I get to do what I love every day.",
      detail: "Supriya, Bay Area | Joined in 2020",
    },
    {
      text: "I opened up a momo restaurant in Kathmandu, Nepal. When I moved to the US, I wanted to work in the food industry — that's when I found Shef.",
      img: "https://cdn.t.shef.com/unsafe/600x0/center/middle/https://cdn.shef.com/static/media/deep.b3d48870.png",
      detail: "Deep, Bay Area | Joined in 2019",
    },
  ];
  return (
    <div>
      <div className='md:p-8 md:px-28 flex flex-col md:flex items-center'>
        <img src={data[0].img} alt='' className='w-4/5 md:w-1/2' />
        <div className='p-6'>
          <p className='text-2xl md:text-4xl text-gray-600'>
            <img src='/assets/Quotes.svg'></img>
            {data[0].text}
          </p>
          <p className='text-sm md:text-2xl py-4 text-gray-600'>{data[0].detail}</p>
        </div>
      </div>

      <div className='md:p-8 md:px-28 flex flex-col  md:flex-row-reverse items-center'>
        <img src={data[1].img} alt='' className='w-4/5 md:w-1/2' />
        <div className='p-6'>
          <p className='text-2xl md:text-4xl text-gray-600'>
            <img src='/assets/Quotes.svg'></img>
            {data[1].text}
          </p>
          <p className='text-sm md:text-2xl py-4 text-gray-600'>{data[1].detail}</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
