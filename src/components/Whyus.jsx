import React from "react";

function Whyus() {
  const data = [
    {
      img: "https://cdn.shef.com/static/media/Talk_Icon.a0654cac.svg",
      title: "Talk to us        ",
      p1: "Reach out to our customer support whenever you have an issue.",
      p2: "We’re only a quick email or text away. Our team looks forward to hearing from you and answering your questions",
    },
    {
      img: "https://cdn.shef.com/static/media/Food_Icon.71ea0c27.svg",
      title: "Pursue your passion",
      p1: "We’ll help you with payments, logistics and customer support so you can focus on what you love: cooking amazing food.",
      p2: "We’ll also provide you with marketing support so that customers can fall in love with your food from day one.",
    },
    {
      img: "https://cdn.shef.com/static/media/Store_Icon.54f36f31.svg",
      title: "Craft your menu        ",
      p1: "Our team has expert photographers on staff to help you take beautiful photos of your dishes.",
      p2: "We’ll help you craft a compelling menu and provide tips on pricing your menu items.",
    },
    {
      img: "https://cdn.shef.com/static/media/Bulb_Icon.d56589f9.svg",
      title: "Get advice       ",
      p1: "We have hundreds of tips and data points available for you to use when designing your food business.",
      p2: "Join our weekly informational calls to learn how to improve your menus and build a successful business on Shef.",
    },
  ];
  return (
    <div>
      <p className='text-4xl text-[#d93A4a] text-center md:text-left  md:mx-24 my-12 font-bold '>Help when you need it</p>

      <div className='flex flex-wrap md:p-24 items-center justify-center'>
        {data.map((data) => {
          return (
            <div className='md:w-3/6 p-8 flex flex-col items-center'>
              <img src={data.img} alt='' className='w-20' />
              <p className='text-2xl my-8 font-bold'>{data.title}</p>
              <p className='text-xl text-gray-500 mt-4 mb-4'>{data.p1}</p>
              <p className='text-xl text-gray-500 mb-4'>{data.p2}</p>
            </div>
          );
        })}
      </div>

      <p className=' border-4 border-pink-200 border-r-0 border-l-0 text-center text-2xl md:text-5xl w-4/5 m-auto md:p-40 my-24'>
        Shef has served over 1,000,000 dishes to customers across the United
        States
      </p>

      <p className='text-4xl text-[#d93A4a]   mx-24 my-12 font-bold '>Cooking safely</p>
      <img
        src='https://cdn.shef.com/static/media/cooking-safely.7001665c.jpg'
        className='m-auto '
      />

      <div className='flex flex-col  md:flex-row w-4/5 m-auto items-center mt-8'>
        <div className='p-4 flex flex-col justify-center items-center'>
          <img
            src='https://cdn.shef.com/static/media/Safety_Icon.1ef71965.svg'
            className='w-20'
          />
          <p className='text-2xl font-bold my-4'>Food safety training</p>
          <p className='text-lg text-gray-500 '>
            All applicants are required to pass an accredited food safety
            certification exam before joining our cooking community. Once you
            pass this course, you’ll be one step closer to cooking and selling
            your food safely!
          </p>
        </div>

        <div className='p-4 flex flex-col justify-center items-center'>
          <img
            src='https://cdn.shef.com/static/media/Trust_Icon.0c7a428b.svg'
            className='w-20'
          />
          <p className='text-2xl font-bold my-4'>Trusted by thousands of people</p>
          <p className='text-lg text-gray-500 '>
            Shef is used every day by thousands of customers around the United
            States. We work hard to help our shefs feel taken care of and
            supported throughout the entire process.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Whyus;
