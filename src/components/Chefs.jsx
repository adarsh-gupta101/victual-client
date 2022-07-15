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
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div style={{ overflow: "hidden" }} className="bg-[white] pb-8">
      <h2 className="text-[#d93A4a]   text-4xl font-bold text-center m-6  md:m-24">
        Meet the Shefs
      </h2>
      <Slider {...settings} className="px-2">
        <Card ch={1} item="Sangeet Rao" cost="5" imglink="http://www.recruitdetroit.com/galleries/Features/young_chefs_part_deux-010.jpg" />
        <Card ch={1} item="Andrews" cost="10" imglink="https://img.sunset02.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2016/05/main/chef-ludo-lefebvre-sun-0616-xl.jpg" />
        <Card ch={1} item="John Doe" cost="7" imglink="http://www.recruitdetroit.com/galleries/Features/young_chefs_part_deux-014.jpg" />
        <Card ch={1} item="Vivek Malhotra" cost="23.5" imglink="https://d1dmo9iwh0r4qt.cloudfront.net/~/media/ai/main/images/_national/blog/how-to-become-a-chef/ai_tampa_web_images_1061.ashx?la=en&modified=20180319204040&hash=5FB233137EFD1C89FCDAF8BA2F9D86FB56D250FC" />
        <Card ch={1} item="Drake Ramoray" cost="5.40" imglink="https://katmeer.com/Assets/Images/Offers/637678887044100396become-chef.jpg" />
      </Slider>
    </div>
  );
};

export default Chefs;
