import React from 'react'
import HEADER from '../assets/headerbeach.jpeg'
const Hero = () => {
  return (
    <div className='w-full h-screen'>
        <img className='top-0 left-0 w-full h-screen object-cover' src={HEADER} alt="OLD BAGAN" />
        <div className='bg-black/20 absolute top-0 left-0 w-full h-screen'/>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
            <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
                <p>All Inclusive</p>
                <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Grand Cabana Sea View & Cottage</h1>
                <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>
                    The graceful Amata Ngapali Beach Resort is an oasis of lush greenery and serenity that sits on the magical shores of Myanmar’s famed
                </p>
                <button className='bg-white text-black '>Reserve Now</button>
            </div>
        </div>
    </div>
  )
}

export default Hero