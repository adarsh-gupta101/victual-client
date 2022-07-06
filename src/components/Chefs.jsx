import Slider from "react-slick";
import Card from "./Card";

const Chefs = () => {
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
    <div style={{ overflow: "hidden" }} className="bg-[#f7f7f7] pb-8">
      <h2 className="text-[#d93A4a]   text-4xl font-bold text-center m-6  md:m-24">
        Meet the Shefs
      </h2>
      <Slider {...settings} className="">
        <Card item="Burger" cost="5" imglink="burger.jpg" />
        <Card item="Pizza" cost="10" imglink="Pizza.jpg" />
        <Card item="Pasta" cost="7" imglink="Pasta.jpg" />
        <Card item="Dosa" cost="23.5" imglink="Dosa.jpg" />
        <Card item="Sushi" cost="5.40" imglink="Sushi.jpg" />
      </Slider>
    </div>
  );
};

export default Chefs;
