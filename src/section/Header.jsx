import React, { useEffect, useState } from 'react'
import {menu,close} from '../assets/icons'

const Header = () => {


  const [toggle, SetToggle] = useState(false);
  const [iconToggle, setIconToggle] = useState(false);
  const [menuClass, setMenuClass ] = useState('');
  const toggleMenu =()=> {
    SetToggle(!toggle);
  }

  const toggleIcon =() => {
    setIconToggle (!iconToggle);
  }

  useEffect(()=>{
    setMenuClass(toggle ?'transition-opacity ease-in-out duration-300 transform transform-y-0 opacity-100': 'transition-opacity eace--n-out duration-300 transform -translate-y-full opacity-0')
  },[toggle]);

  return (
   
    <section className='w-full bg-black text-white flex justify-between items-center px-8 py-6 lg:px-16 sticky top-0 z-40'>
      <h1 className='text-blue-600 text-3xl font-bold'>AGENCY ENTITY</h1>
      <div className='hidden lg:flex justify-end items-center gap-2 '>

    <ul className='flex justify-center items-center gap-3'>
      <li><a href="/" className='text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-blue-600 hover:text-white active:text-white'>Home</a></li>
      <li><a href="#service" className='text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-blue-600 hover:text-white active:text-white'>Service</a></li>
      <li><a href="#testionials" className='text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-blue-600 hover:text-white active:text-white'>Testionials</a></li>
      <li><a href="#pricing" className='text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-blue-600 hover:text-white active:text-white'>Pricing</a></li>
      <li><a href="#contact" className='text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-blue-600 hover:text-white active:text-white'>Contact</a></li>
    </ul>
      </div>
      <div className='flex lg:hidden flex-col'>
      {iconToggle ?(
        <img src={close} alt="close icon" width={40} height={40} onClick={()=>{toggleMenu(); toggleIcon();}} />
      ):(
        <img src={menu} alt="menu icon" width={40} height={40} onClick={()=>{toggleMenu(); toggleIcon();}} />
      )}

      {toggle && (
        <div id=' mob-manu' className={'bg-blue-500 text-white py-4 absolute top-20 right-0 w-full ${menuclass}'}>
          <ul className='flex flex-col justify-center items-center gap-2'>
            <li className='text-xl text-white font-semibold hover:bg-blue-600 hover:text-white w-full py-3 text-center'>Home</li>
            <li className='text-xl text-white font-semibold hover:bg-blue-600 hover:text-white w-full py-3 text-center'>Service</li>
            <li className='text-xl text-white font-semibold hover:bg-blue-600 hover:text-white w-full py-3 text-center'>Testionials</li>
            <li className='text-xl text-white font-semibold hover:bg-blue-600 hover:text-white w-full py-3 text-center'>Pricing</li>
            <li className='text-xl text-white font-semibold hover:bg-blue-600 hover:text-white w-full py-3 text-center'>Contact</li>

          </ul>
        </div>
      )}
      </div>
    </section>
  )
}

export default Header