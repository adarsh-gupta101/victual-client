import Slider from "react-slick";
import Card from "./Card";

const TopRated = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2.7,
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
          slidesToShow: 1.05,
          slidesToScroll: 1,
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
    <div style={{ overflow: "hidden" }} className=" bg-white pb-16">
      <h2 className="text-[#d93A4a]   text-4xl font-bold text-center m-6  md:m-16">
        Top Rated Dishes
      </h2>
      <Slider {...settings} className="p-2  md:p-0 ">
        <Card item="Burger" cost="5" imglink="/assets/burger.jpg" />
        <Card item="Pizza" cost="10" imglink="/assets/Pizza.jpg" />
        <Card item="Pasta" cost="7" imglink="/assets/Pasta.jpg" />
        <Card item="Dosa" cost="23.5" imglink="/assets/Dosa.jpg" />
        <Card item="Sushi" cost="5.40" imglink="/assets/Sushi.jpg" />
      </Slider>
    </div>
  );
};

export default TopRated;
