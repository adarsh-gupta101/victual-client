import React from "react";

function Whatis() {
  const data = [
    {
      img: "https://cdn.shef.com/static/media/Cash_Icon.73e8e523.svg",
      title: "Make real money",
      desc: "It’s completely free to apply. Many shefs make around $1,000 per week.",
    },
    {
      img: "https://cdn.shef.com/static/media/Star_Icon.f434fd06.svg",
      title: "Be your own boss ",
      desc: "Design your own menu, set your own prices and work when you want. We’ll help you with payments, logistics and customer support.",
    },
    {
      img: "https://cdn.shef.com/static/media/Community_Icon.ede07d9a.svg",
      title: "Serve happy customers",
      desc: "We’ll provide you with marketing support so you can share your food with customers across your community.",
    },
  ];

  return (
    <div className='p-8 md:px-28 mt-8'>
      <p className='text-[#d93A4a]  font-bold text-5xl text-center md:text-left'>
        What is Shef
      </p>
      <p className='my-8 text-lg text-gray-500 text-center md:text-left'>
        Shef connects talented cooks with local customers.
      </p>
      <p className='text-sm md:text-xl md:w-2/3 text-gray-500 text-center md:text-left'>
        We believe in providing the shefs in our community — individuals who
        have always dreamt of building their own food business — the opportunity
        to make a meaningful income by doing what they love! We also believe
        that every person should have access to a wholesome, homemade meal at an
        affordable price.{" "}
        <span className='text-sm md:text-xl font-bold block mt-3 md:mt-0 md:inline'>
          Building a community devoted to economic empowerment and cultural
          inclusivity
        </span>{" "}
        — that’s why we started Shef.
      </p>

      <p className='text-[#d93A4a]  font-bold text-4xl mt-24 text-center md:text-left'>
        Why become a shef?
      </p>

      <div className='flex flex-col md:flex-row my-20 md:items-center  justify-between w-full'>
        {data.map((res) => {
          return (
            <div className='md:w-1/3 p-4 flex flex-col justify-center items-center md:items-start  '>
              <img src={res.img} className='w-20' />
              <p className='text-xl md:text-2xl font-bold mt-8'>{res.title}</p>
              <p className='text-xl text-center md:text-left text-gray-500 mt-8'>{res.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Whatis;

// Breakpoint prefix	Minimum width	CSS
// sm	640px	@media (min-width: 640px) { ... }
// md	768px	@media (min-width: 768px) { ... }
// lg	1024px	@media (min-width: 1024px) { ... }
// xl	1280px	@media (min-width: 1280px) { ... }
// 2xl	1536px
