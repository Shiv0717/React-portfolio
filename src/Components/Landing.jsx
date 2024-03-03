import React from 'react'
import { BsArrowDown } from "react-icons/bs";


const Landing = () => {
  return (
    <div className='w-full h-auto lg:flex flex flex-col justify-center items-center lg:flex-row font-["DM_Sans"]'>
     <div className=' text-center pt-14 lg:w-1/2 h-auto lg:pt-40 lg:text-left lg:pl-40'>
        <h1 className='text-6xl font-["DM_Sans"]' >Hello, I’m </h1>
        <h1 className='text-6xl font-["DM_Sans"]'>Shiv Kumar.</h1>
        <div className=' font-["DM_Sans"] hidden lg:flex lg:mt-20  lg:text-7xl '>
         <BsArrowDown />
         </div>
     </div>
     <div className='lg:w-1/2 h-auto  text-center lg:pt-28 lg:text-left lg:pr-24   lg:text-balance '>
      <p className='font-["DM_Sans"] pl-4 pr-4 text-3xl pt-5 text-[#606060] font-light'>A senior-year design student who trying to specialize in 3D modeling & texturing.</p>
      
     </div>
     <div className='flex items-center mt-4 text-5xl lg:hidden'>
       <h1><BsArrowDown /></h1> 
      </div>
    </div>
  )
}

export default Landing
