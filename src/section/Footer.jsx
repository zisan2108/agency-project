import React from 'react'
import {fb, insta, twitter, yt } from '../assets/icons'

const Footer = () => {
  return (
    <section className='w-full bg-black text-white flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-4px-10 py-14 lg:px-20 lg:py-28'> 
      <div className='flex flex-col justify-center items-start gap-2 w-full lg:w-[40%]'>
      <h1 className='text-blue-600 font-bold text-4xl'>AGENCY ENRITY</h1>
      <p className='text-lg text-slate-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ab accusamus ipsum modi, in eius alias nesciunt rem ipsa nobis.</p>
      
      <div className='flex justify-center items-center gap-4 mt-7' id='logos'>
        <span className='bg-white p-2 rounded-full cursor-pointer hover:bg-blue-600'><img src={fb} alt="fb icons" width={20} height={20}/></span>
        <span className='bg-white p-2 rounded-full cursor-pointer hover:bg-blue-600'><img src={yt} alt="fb icons" width={20} height={20}/></span>
        <span className='bg-white p-2 rounded-full cursor-pointer hover:bg-blue-600'><img src={insta} alt="fb icons" width={20} height={20}/></span>
        <span className='bg-white p-2 rounded-full cursor-pointer hover:bg-blue-600'><img src={twitter} alt="fb icons" width={20} height={20}/></span>
      </div>
      </div>

      <div className='flex flex-col justify-self-center items-center w-full lg:w-[20%]'>
        <ul className='flex flex-col justify-center items-start gap-3'>
          <h1 className='text-xl font-semibold'>PAGES</h1>
          <li className='text-slate-300 cursor-pointer hover:text-blue-300'>Home</li>
          <li className='text-slate-300 cursor-pointer hover:text-blue-300'>Service</li>
          <li className='text-slate-300 cursor-pointer hover:text-blue-300'>Testimonils</li>
          <li className='text-slate-300 cursor-pointer hover:text-blue-300'>Pricing</li>
          <li className='text-slate-300 cursor-pointer hover:text-blue-300'>Contact</li>
        </ul>
      </div>
      <div className='flex flex-col justify-self-center items-center w-full lg:w-[20%]'>
        <ul className='flex flex-col justify-center items-start gap-3'>
          <h1 className='text-xl font-semibold'>PAGES</h1>
          <li className='text-slate-300 cursor-pointer hover:text-blue-300'>Home</li>
          <li className='text-slate-300 cursor-pointer hover:text-blue-300'>Service</li>
          <li className='text-slate-300 cursor-pointer hover:text-blue-300'>Testimonils</li>
          <li className='text-slate-300 cursor-pointer hover:text-blue-300'>Pricing</li>
          <li className='text-slate-300 cursor-pointer hover:text-blue-300'>Contact</li>
        </ul>
      </div>
      <div className='flex flex-col justify-self-center items-center w-full lg:w-[20%]'>
        <ul className='flex flex-col justify-center items-start gap-3'>
          <h1 className='text-xl font-semibold'>PAGES</h1>
          <li className='text-slate-300 cursor-pointer hover:text-blue-300'>Home</li>
          <li className='text-slate-300 cursor-pointer hover:text-blue-300'>Service</li>
          <li className='text-slate-300 cursor-pointer hover:text-blue-300'>Testimonils</li>
          <li className='text-slate-300 cursor-pointer hover:text-blue-300'>Pricing</li>
          <li className='text-slate-300 cursor-pointer hover:text-blue-300'>Contact</li>
        </ul>
      </div>

    </section>
  )
}

export default Footer