import React from 'react'
import { clients } from '../exports'
import ClientGrides from '../components/ClientGrides'



const Testimonials = () => {
  return (
    <section id='testionials' className='w-full flext flex-col gap-5 h-fit p-7 lg:p-20'>

      <p className='text-center text-xl'>Testimonials</p>
      <h1 className='text-blue-600 font-bold text-6xl text-center leading-[68px]'>What clients Says</h1>
      <p className='text-slate-950 text-2xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea deleniti consequatur laborum <br /> maiores repudiandae fugiat eveniet, commodi dignissimos fugit quam.</p>
      <div className='flex justify-center items-center flex-wrap mt-5 w-full gap-6'>
        {clients.map((client)=>(
          <div key={client.name} className='w-80'>
            <ClientGrides {...client}/>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Testimonials