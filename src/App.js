import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Whatis from "./components/Whatis";
import Testimonial from "./components/Testimonial";
// import Slider from 'react-slick';
import Sliders from "./components/Slider";
import Whyus from "./components/Whyus";
import Faq from "./components/Faq";
import End from "./components/End";
import { useState } from "react";
import BannerUser from "./components/BannerUser";
import Featured from "./components/Featured";
import TopRated from "./components/TopRated";
import Chefs from "./components/Chefs";
import TestimonialUser from "./components/TestimonialUser";
import GetApp from "./components/GetApp";
import Type from "./components/Type";
import Meal from "./components/Meal";

function App() {
  const [chef, setChef] = useState(false);
  return (
    <div className=" overflow-hidden" style={{ fontFamily: "Poppins" ,overflow:"hidden"}}>
      <Header chef={chef} setChef={setChef} />
      {chef ? (
        <>
          <Banner />
          <Whatis />
          <Testimonial />
          <Sliders />
          <Whyus />
          <Faq />
        </>
      ) : (
        <>
          <BannerUser />
          <Type/>
          <Whatis />
          <Sliders />

          <Featured />
          <TopRated />
          <Meal/>
          <Chefs/>
          <Whyus />

          {/* <Chefs /> tried making chefs cards but it dosent look right */}
          {/* <Testimonial /> */}

          <TestimonialUser />
          <Faq />
          <GetApp />

        </>
      )}
      <End />
    </div>
  );
}

export default App;
