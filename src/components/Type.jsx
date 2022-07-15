import React from "react";
// import Widget  from '@typeform/embed'

import { Widget } from "@typeform/embed-react";
import "@typeform/embed/build/css/widget.css";

function Type() {
  const widgetContainerStyle = {
    width: 500,
    height: 400,
    margin: "20px auto",
  };
  const [state, setState] = React.useState(false);
  const [state2, setState2] = React.useState(false);
  const [Submit, setSubmit] = React.useState(false);
  return (
    <div>
      {/* <Widget
        id={"moe6aa"}
        style={widgetContainerStyle}
        medium='demo-test'
        hidden={{ foo: "foo value", bar: "bar value" }}
        transitiveSearchParams={["foo", "bar"]}
        iframeProps={{ title: "Foo Bar" }}
      /> hi */}
      {!state ? (
        <div className='w-full h-96 flex  flex-col items-center justify-center'>
          <p className='text-xl'>Which mode of Delivery do you want?</p>
          <div className='flex p-2 m-2'>
            <p
              name='Self PickUp'
              className='text-xl bg-pink-500 cursor-pointer ease-in-out duration-200 text-white hover:text-pink-500 hover:bg-white hover:border-pink-500 hover:border-2 p-2 m-4'>
              Self Pickup
            </p>
            <p
              name='Home Delivery'
              onClick={() => {setState(true);setState2(true)}}
              className='text-xl bg-gray-50 cursor-pointer ease-in-out duration-200 hover:bg-pink-500 hover:border-2 hover:border-pink-400 hover:text-white text-pink-500 border-2 border-pink-500 p-2 m-4'>
              Home Delivery
            </p>
          </div>
        </div>
      ) : null}

      { state2 ? (
        <div className='w-full h-96  flex  flex-col items-center justify-center'>
          <p className='text-xl'>Enter your Delivery location</p>

          <input
            className='border-2 border-pink-500 p-2 m-2 w-96  '
            type='name'
            placeholder='Name'
          />
          <input
            className='border-2 border-pink-500 p-2 m-2 w-96  '
            type='adress'
            placeholder='Adress'
          />
          <input
            className='border-2 border-pink-500 p-2 m-2 w-96  '
            type='adress'
            placeholder='District'
          />
          <input
            className='border-2 border-pink-500 p-2 m-2 w-96  '
            type='adress'
            placeholder='State'
          />
          <p
            type='button'
            placeholder='Submit ' 
            onClick={()=>{setSubmit(true);setState2(false)}}
            className='bg-pink-500 text-white hover:cursor-pointer p-2 px-16 mt-8'>
            Submit
          </p>
        </div>
      ) : null}
      {Submit?<div className="h-96 flex items-center justify-center"><p className="text-xl  ">✔ Thanks for submiting,You will get your order Soon</p></div>:null}
    </div>
  );
}

export default Type;
