import Slider from "react-slick";

const TestimonialUser = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.64,
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
    <div style={{ overflow: "hidden" }} className="bg-[white] pb-16">
      <h2 className="text-[#d93A4a]   text-4xl font-bold text-center m-6  md:m-16">
        What our customers have to say
      </h2>
      <Slider {...settings} className="">
        <div class="max-w-3xl p-4 text-gray-800 bg-white rounded-lg shadow">
          <div class="mb-2">
            <div class="h-3 text-3xl text-left text-indigo-600">“</div>
            <p class="px-4 text-center text-gray-600">
              it is the best application I am using from last two years for
              ordering online food. I am totally satisfied with this with
              minimum time I get my food on my door step. It is very easy to use
              this application and can pay online with different methods.
            </p>
            <div class="h-3 text-3xl text-right text-indigo-600">”</div>
            <div class="text-center">
              <h5 class="font-bold text-indigo-600">John Doe</h5>
              <p class="text-sm text-gray-600">Cool guy</p>
            </div>
          </div>
        </div>
        <div class="max-w-3xl p-4 text-gray-800 bg-white rounded-lg shadow">
          <div class="mb-2">
            <div class="h-3 text-3xl text-left text-indigo-600">“</div>
            <p class="px-4 text-center text-gray-600">
              Most of the time I stay out of hometown and I do not have to worry
              about food because shef takes care of that. I can order food
              during night whenever I am working late and don't feel like
              cooking anything. I can order healthy food as well whenever I am
              on my diet.
            </p>
            <div class="h-3 text-3xl text-right text-indigo-600">”</div>
            <div class="text-center">
              <h5 class="font-bold text-indigo-600">Jane Doe</h5>
              <p class="text-sm text-gray-600">Faithful customer</p>
            </div>
          </div>
        </div>
        <div class="max-w-3xl p-4 text-gray-800 bg-white rounded-lg shadow">
          <div class="mb-2">
            <div class="h-3 text-3xl text-left text-indigo-600">“</div>
            <p class="px-4 text-center text-gray-600">
              Zomato has the best UI. The app is very easy to use. The support
              team of Zomato is amazing, I have lodged complaints many times
              regarding the wrong items sent by the restaurants and zomato has
              immediately initiated a refund.
            </p>
            <div class="h-3 text-3xl text-right text-indigo-600">”</div>
            <div class="text-center">
              <h5 class="font-bold text-indigo-600">Jane John</h5>
              <p class="text-sm text-gray-600">A person</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default TestimonialUser;
