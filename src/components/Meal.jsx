import React from "react";
import Select from "react-select";

function Meal() {
    const [state, setstate] = React.useState(false)
  const options = [
    { value: "India", label: "India" },
    { value: "USA", label: "USA" },
    { value: "Mexico", label: "Mexico" },
    { value: "France", label: "France" },
  ];
  const options2 = [
    { value: "Hard Tucas", label: "Hard Tucas" },
    { value: "Pasta", label: "Pasta" },
    { value: "Fajitas", label: "Fajitas" },
    { value: "Chilaquiles", label: "Chilaquiles" },
    { value: "Machaca", label: "Machaca" },
    { value: "Burritos", label: "Burritos" },
    { value: "Fatas", label: "Fatas" },
  ];
  const options3 = [
    { value: "No Preference", label: "No Preference" },
    { value: "Dev", label: "Dev" },
    { value: "Chalil", label: "Chalil" },
    { value: "Alfred", label: "Alfred " },
  ];
  const options4 = [
    { value: "Pick Up", label: "Pick Up" },
    { value: "Delivery", label: "Delivery" },
    // { value: 'vanilla', label: 'Vanilla' }
  ];
  return (
    <div className='flex flex-col justify-center items-center h-96 w-full'>
      <p className='text-4xl font-bold text-[#d93A4a]'>Find My Meal</p>
    { !state? <>
    <div className='flex md:flex-row flex-col w-full mt-16'>
        <Select placeholder="Country" options={options} className='md:w-1/4 p-2 m-2' />
        <Select placeholder="Recipe" options={options2} className='md:w-1/4 p-2 m-2' />
        <Select placeholder="Shef" options={options3} className='md:w-1/4 p-2 m-2' />
        <Select placeholder="Delivery Mode" options={options4} className='md:w-1/4 p-2 m-2' />
      </div>
      <p className='bg-[#d93A4a] text-white hover:cursor-pointer p-2 px-16 mt-8' onClick={()=>setstate(true)}>
        Submit
      </p></>
      :""}
            {state?<div className="h-96 flex items-center justify-center"><p className="text-xl  ">✔ Thanks for submiting,You will get your order Soon</p></div>:null}

    </div>
  );
}

export default Meal;
