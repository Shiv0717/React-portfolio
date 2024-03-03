import React from 'react'

const Card = () => {
  return (
    <div className='w-full h-auto mt-20 lg:flex font-["DM_Sans"]'>
      <div className='pl-4 pr-4 flex  lg:pl-0 flex-col gap-5 lg:w-1/2 lg:ml-40  lg:border-b-[1.5px]  lg:border-black	 '>
        <h5 className='font-semibold'>01 / PROJECT NAME</h5>
        <h6>Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development.</h6>
        <p className='pb-10 text-[#606060]'>Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.</p>
        <a className=' text-center pt-4 pb-4 underline hidden lg:flex lg:pt-16   lg:mt-2  lg:pb-20    '>More shots from this project ↗</a>
      </div>
       <div className='pl-4 pr-4 flex flex-col lg:pr-0  lg:w-1/2 lg:mr-40  border-b-[1.5px] border-black'>
       <div className='py-44 bg-slate-600'></div>
       <a className=' text-center pt-4 pb-12 underline  lg:hidden'>More shots from this project ↗</a>
       </div>
    </div>
  )
}

export default Card
