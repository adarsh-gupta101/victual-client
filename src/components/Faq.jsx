import React from "react";
import { Dropdown } from "react-bootstrap";
import Induvidualsolution from "./InduvidualSolutions";

function Faq() {
  const [isOpen, setOpen] = React.useState(false);
let [a,b,c,d]=[0,0,0,0]
  const questions = [
    {
      ques: "What is Shef",
      ans: "Shef is a community-based platform that enables cooks to sell homemade food to their neighbors. Over the last couple years, we've helped shefs sell over 1,000,000 dishes and feed thousands of people around the country. If you're interested in learning more about how you can feed your community, please contact us at cook@shef.com",
    },
    {
      ques: "What is cooking on Shef really like?",
      ans: "Cooking on Shef is easy. You set your availability and your customers order from your menu on Shef. We’ll notify you of all the orders in an easy-to-read list. Once you’ve finished cooking, you’ll safely cool your dishes and prepare them for delivery. Once your customers receive their food, you’ll get the chance to hear how much they enjoyed it.",
    },
    {
      ques: "How do I get paid?",
      ans: "We partner with an online payment processing system, which automatically issues payments soon after each day that you cook!",
    },
    {
      ques: "Who are Shefs customers",
      ans: "Shef's customers represent a wide cross-section of people from diverse backgrounds, ethnicities, and walks of life. Similarly to many of our shefs, many customers are immigrants and expats who use Shef to enjoy comfort food from their home countries. Customers also tend to be adventurous and love to try new cuisines and dishes. They are typically planners who incorporate Shef meals into their weekly routines, enjoying homemade dishes throughout the week with their families and loved ones. Just as we do with all our shefs, we welcome every customer into the Shef community with open arms.",
    },
  ];
  return (
    <div>
      <p className='text-pink-600 text-4xl mt-32 font-bold  text-center'>
        Frequently asked questions
      </p>
      {/* {questions.map((data,id) => {
        return (
          <div key={id}>
            <p className='text-center text-2xl font-bold' >{data.ques}</p>
            <p className='text-center text-xl '>{data.ans}</p>
          </div>
        );
      })}{" "} */}
      <div className=' py-6 md:mx-24 md:my-24 bg-wite  ' >
      { questions.map((item, index) => {
        return (

          <Induvidualsolution  key={index} item={item}/>

        )})}
    </div>
    <p className="text-center">Still have more questions? Feel free to contact us.</p>
    </div>
  );
}

export default Faq;
