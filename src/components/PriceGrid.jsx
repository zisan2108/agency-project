import React from 'react'

const PriceGrid = ({plan, price, label, about }) => {
  return (
    <div className='flex flex-col justify-center items-start bg-white px-6 pt-10 pb-20 rounded-xl gap-8 border-[3px] border-blue-800'>
          <h1 className='text-blue-00 text-3xl'>{plan}</h1>
          <h1 className='text-blue-600 text-3xl font-bold'>{price}</h1>
          <p className='bg-blue-800 text-white px-6 py-2 rounded-md text-[20px] hover:bg-black hover:text-white cursor-pointer'>{label}</p>
          <p className='text-slate-800 text-xl'>{about}</p>
      </div>
  )
}





export default PriceGrid