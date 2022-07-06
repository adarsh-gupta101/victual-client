import Slider from "react-slick";
import Card from "./Card";

const Featured = () => {
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
          slidesToShow: 1,
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
        Featured Dishes
      </h2>
      <Slider {...settings} className="px-2">
        <Card item="Burger" cost="5" imglink="burger.jpg" />
        <Card item="Pizza" cost="10" imglink="Pizza.jpg" />
        <Card item="Pasta" cost="7" imglink="Pasta.jpg" />
        <Card item="Dosa" cost="23.5" imglink="Dosa.jpg" />
        <Card item="Sushi" cost="5.40" imglink="Sushi.jpg" />
      </Slider>
    </div>
  );
};

export default Featured;
