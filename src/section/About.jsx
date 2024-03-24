import React from 'react'
import {aboutgrids} from '../exports'
import AboutGrid from '../components/AboutGrid'

const About = () => {
  return (
  
    <section id='service'className='w-fill bg-slate-200 flex  flex-col lg:flex-row gap-10 lg:gap-20 h-fit px-7 py-4 lg:px-18 lg:py-12'>
        <div className='flex justify-center items-start flex-col gap-8 lg:w-1/2'>
            <h1 className='text-blue-600 font-bold text-6xl'>Hosting solution with benefits</h1>
            <p className='text-slate-05 text-2xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat aperiam veritatis, possimus quisquam totam ea distinctio minus exercitationem ipsam quis?</p>
            <div className='flex justify-center items-center gap-7'>
                <button className='bg-blue-800 text-white px-8 py-3 rounded-md text-[18px] hover:bg-black hover:text-white cursor-pointer '>Read More</button>
            </div>
            </div>

            <div className='flex justify-center items-center w-full lg:w-1/2 flex-wrap'>
            {aboutgrids.map((grid)=>(
                <div key={grid.label} className='w-full lg:w-1/2'>
                    <AboutGrid{...grid}/>

                </div>
            ))}
        
        

        </div>

    </section>
  )
}

export default About