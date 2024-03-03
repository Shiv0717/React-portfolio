import React from 'react'
import { MdMenuOpen } from "react-icons/md";


const Nav = () => {
  return (
    <div className='py-3  flex items-center lg:py-6 bg-white lg:flex lg: justify-between lg:items-center'>
      <div>
        <h1 className="text  pl-4 text-4xl  font-['DM_Sans'] font-medium lg:pl-40">sk.</h1>
      </div>
      <div className='lg:flex lg:pr-40 gap-5'>
        {["Work","About","playground","contact"].map((item,index)=>(
            <a className='  font-["DM_Sans"] hidden lg:flex'>{item}</a>
        ))}
        <div className='lg:hidden text-4xl pr-4'>
        <MdMenuOpen/>
        </div>
      </div>
    </div>
  )
}

export default Nav
