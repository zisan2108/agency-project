import React from 'react'

const ClientGrides = ({image,about, name , profile}) => {
  return (
    <div className='bg-slate-200 px-6 py-8 flex justify-center items-center flex-col gap-4 rounded-lg'>
        <img src={image} alt="image" width={140} height={140} />
        <p className='text-center text-[17px] text-gray-600'>{about}</p>
        <h1 className='text-center text-blue text-2xl font-semibold'>{name}</h1>
        <p className='text-center text-[17px] text-gray-600'>{profile}</p>

        
    </div>
  )
}

export default ClientGrides