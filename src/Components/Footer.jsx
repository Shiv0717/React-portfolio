import React from 'react'

const Footer = () => {
  return (
    <div className='font-["DM_Sans"] flex gap-5  justify-between   items-center lg:mt-20'>
      <div className='ml-4 mt-4 mb-4 lg:ml-40 '>
      <h1 className='font-["DM_Sans"] text-sm lg:mb-10 text-[#2429AFç] '>Shiv Kumar - 2024</h1>
      </div>
      <div className='lg:mr-36 lg:mb-10 '>
       {["Instagram","LinkedIn","Github"].map((item,index)=>(
        <a className='text-sm mr-4 '> {item} </a>))}
      </div>
    </div>
  )
}

export default Footer
