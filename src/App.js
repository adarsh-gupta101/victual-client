import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Whatis from './components/Whatis';
import Testimonial from './components/Testimonial';
// import Slider from 'react-slick';
import Sliders from './components/Slider';
import Whyus from './components/Whyus';
import Faq from './components/Faq';
import End from './components/End';

function App() {
  return (
    <div className=" overflow-hidden">
      <Header/>
      <Banner/>
      <Whatis/>
      <Testimonial/>
      <Sliders/>
      <Whyus/>
      <Faq/>
      <End/>
    </div>
  );
}

export default App;
