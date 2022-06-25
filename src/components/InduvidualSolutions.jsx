// import { Squeeze as Hamburger } from "hamburger-react";
import React, { useState } from "react";
// import Link from "next/link";
import { RiArrowDownSLine } from "react-icons/ri";
function Induvidualsolution({ item }) {
  const [isOpen, setOpen] = useState(false);
  // console.log(item)

  return (
    <div className=' text-left p-12 shadow md:w-2/3 m-auto '>
      <p
        className='text-2xl font-bold flex items-center justify-between cursor-pointer'
        onClick={() => setOpen(!isOpen)}>
        {" "}
        {item.ques}
        <RiArrowDownSLine />
      </p>
      <p className={isOpen ? "text-sm md:text-lg mt-4 text-gray-500" : "hidden"}>
        {item.ans}
      </p>
    </div>
  );
}

export default Induvidualsolution;
