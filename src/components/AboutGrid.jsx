import React from 'react'

const AboutGrid = ({ icon, text, label, heading}) => {
  return (
    <div className='flex justify-center items-center gap-55 flex-col bg-white rounded-md m-2 p-3 lg:p-7 '>
        <img src={icon} alt="icon" width={65} height={65} className='bg-blue-400 p-3 rounded-full hover:bg-blue-500 cursor-pointer'/>
        <h1 className='text-2xl lg:text-3xl text-center text-blue-600  font-semibold'>{heading}</h1>
        <p className='text-[18px] text-center text-slate-700'>{text}</p>
        <p className='bg-blue-800 text-white px-6 py-2 rounded-md text-[16px] hover:bg-black hover:text-white cursor-pointer'>{label}</p>
    </div>
  )
}

export default AboutGrid